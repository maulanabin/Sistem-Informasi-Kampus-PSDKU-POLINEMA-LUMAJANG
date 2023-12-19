package com.doyatama.university.service;


import com.doyatama.university.exception.BadRequestException;
import com.doyatama.university.exception.FileStorageException;
import com.doyatama.university.exception.ResourceNotFoundException;
import com.doyatama.university.model.Berita;
import com.doyatama.university.payload.berita.BeritaRequest;
import com.doyatama.university.payload.berita.BeritaResponse;
import com.doyatama.university.payload.PagedResponse;
import com.doyatama.university.property.FileStorageProperties;
import com.doyatama.university.repository.BeritaRepository;
import com.doyatama.university.security.UserPrincipal;
import com.doyatama.university.util.AppConstants;
import org.aspectj.weaver.ast.Or;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Doyatama
 */
@Service
public class BeritaService {
    @Autowired
    private BeritaRepository beritaRepository;

    private final Path fileStorageLocation;

    private static final Logger logger = LoggerFactory.getLogger(BeritaService.class);

    @Autowired
    public BeritaService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public PagedResponse<BeritaResponse> getAllBerita(int page, int size) {
        validatePageNumberAndSize(page, size);

        // Retrieve Polls
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "id");
        Page<Berita> beritas = beritaRepository.findAll(pageable);
        if(beritas.getNumberOfElements() == 0) {
            return new PagedResponse<>(Collections.emptyList(), beritas.getNumber(),
                    beritas.getSize(), beritas.getTotalElements(), beritas.getTotalPages(), beritas.isLast(), 200);
        }
        // Map Polls to PollResponses containing vote counts and poll creator details
        List<BeritaResponse> beritaResponses = beritas.map(asResponse -> {
            BeritaResponse beritaResponse = new BeritaResponse();
            beritaResponse.setId(asResponse.getId());
//            organisasiResponse.setCreatedAt(asResponse.getCreatedAt());
//            organisasiResponse.setUpdatedAt(asResponse.getUpdatedAt());
            beritaResponse.setName(asResponse.getName());
            beritaResponse.setDescription(asResponse.getDescription());
            beritaResponse.setSelengkapnya(asResponse.getSelengkapnya());
            beritaResponse.setFileName(asResponse.getFileName());
            beritaResponse.setFileType(asResponse.getFileType());
            beritaResponse.setData(asResponse.getData());

            return beritaResponse;
        }).getContent();
        return new PagedResponse<>(beritaResponses, beritas.getNumber(),
                beritas.getSize(), beritas.getTotalElements(), beritas.getTotalPages(), beritas.isLast(), 200);
    }

    public Berita createBerita(UserPrincipal currentUser, @Valid BeritaRequest beritaRequest, MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Berita berita = new Berita();
//        organisasi.setCreatedBy(currentUser.getId());
//        organisasi.setUpdatedBy(currentUser.getId());
        berita.setName(beritaRequest.getName());
        berita.setDescription(beritaRequest.getDescription());
        berita.setSelengkapnya(beritaRequest.getSelengkapnya());

        berita.setFileName(fileName);
        berita.setFileType(file.getContentType());
        berita.setData(file.getBytes());

        return beritaRepository.save(berita);


    }

    public BeritaResponse getBeritaById(Long beritaId) {
        Berita berita = beritaRepository.findById(beritaId).orElseThrow(
                () -> new ResourceNotFoundException("Berita", "id", beritaId));
        BeritaResponse beritaResponse = new BeritaResponse();
        beritaResponse.setId(berita.getId());
//        organisasiUploadResponse.setCreatedAt(organisasi.getCreatedAt());
//        organisasiUploadResponse.setUpdatedAt(organisasi.getUpdatedAt());
        return beritaResponse;
    }
    private void validatePageNumberAndSize(int page, int size) {
        if(page < 0) {
            throw new BadRequestException("Page number cannot be less than zero.");
        }
        if(size > AppConstants.MAX_PAGE_SIZE) {
            throw new BadRequestException("Page size must not be greater than " + AppConstants.MAX_PAGE_SIZE);
        }
    }
    public Berita updateBerita(@Valid BeritaRequest beritaRequest, Long id, UserPrincipal currentUser, MultipartFile file) throws IOException {
        return beritaRepository.findById(id).map(berita -> {
//            organisasi.setUpdatedBy(currentUser.getId());
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            // Organisasi organisasi = new Organisasi();
            //        organisasi.setCreatedBy(currentUser.getId());
            //        organisasi.setUpdatedBy(currentUser.getId());
            berita.setName(beritaRequest.getName());
            berita.setDescription(beritaRequest.getDescription());
            berita.setSelengkapnya(beritaRequest.getSelengkapnya());

            berita.setFileName(fileName);
            berita.setFileType(file.getContentType());
            try {
                berita.setData(file.getBytes());
            } catch (IOException e) {
                // Handle the IOException here or rethrow it as an unchecked exception if needed.
                throw new RuntimeException("Error reading file content: " + e.getMessage(), e);
            }
            return beritaRepository.save(berita);
        }).orElseThrow(() -> new ResourceNotFoundException("Berita" , "id" , id));
    }
    public void deleteBeritaById(Long id){
        Optional<Berita> berita = beritaRepository.findById(id);
        if(berita.isPresent()){
            beritaRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Berita", "id", id);
        }
    }
}
