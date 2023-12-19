package com.doyatama.university.model;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "pendaftarans")
public class Pendaftaran {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(max = 100)
    private String name;
    private String description;
    private String fileType;
    private String fileName;
    @Lob
    private byte[] data;


    public Pendaftaran() {
    }

    public Pendaftaran(Long id) {
        this.id = id;
    }

    public Pendaftaran(Long id, String name, String description, String fileName, String fileType, byte[] data) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    public String getFileName() {
        return fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }


    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}