import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import TextSection from '../../components/TextSection'
import withRoot from '../../components/withRoot'
import SlideShow from '../../components/SlideShow'
import NewsCard from '../../components/NewsCard_Budaya'
import NewsCard2 from '../../components/NewsCard_NavBar'
import NewsCard1 from '../../components/NewsCard_NavBarKalender'
import NewsCard3 from '../../components/NewsCard_MenuNav'
import { useTranslation, withTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatIcon from '../../components/ChatIcon';
import ClipLoader from "react-spinners/ClipLoader";
import { isMobile } from 'react-device-detect';


const budaya_lumajang = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(()=> {
        setLoading(false);
        }, 500);
        }, []);

        const [showPopup, setShowPopup] = useState(false);

        useEffect(() => {
          if (isMobile) {
            setShowPopup(true);
          }
        }, []);
      
        const hidePopup = () => {
          setShowPopup(false);
        };
      
        return (
            <div>
                {showPopup && (
            <div className={classes.popup}>
              <p>
              Mohon maaf, kami sarankan untuk membuka situs ini pada Desktop atau Laptop agar mendapatkan pengalaman yang lebih baik. Jika membuka pada Smartphone atau Mobile, Anda dapat mencoba mengklik tanda titik tiga di pojok kanan atas browser untuk mengakses Situs Desktop (Desktop Site). 😊  
              </p>
              <button className={classes.closeButton} onClick={hidePopup}>
                Close
              </button>
            </div>
          )}
        {loading ? (
          <div className={classes.spinnerContainer}>
            <ClipLoader color="#051d47" loading={loading} size={50} />
          </div>
        ) : (
        <div style={{backgroundImage: 'url("/assets/images/bg_polinema1.png")', backgroundRepeat: 'repeat', backgroundSize: 900}}>
        <Layout title="Home">
              <Card className={classes.card}>
                    <div className={classes.container}>
                        <Breadcrumb style={{marginTop:"10px"}}>
                            <Breadcrumb.Item href="/"> {t('beranda.label')}</Breadcrumb.Item>
                            <Breadcrumb.Item href="/budaya_lumajang"> {t('Kehidupan Lumajang')}</Breadcrumb.Item>
                            <Breadcrumb.Item active href="/budaya_lumajang"> {t('Budaya Lumajang')}</Breadcrumb.Item>
                        </Breadcrumb>        
                    </div>
                </Card>
                <Grid container className={classes.contentContainer}>
                    <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={9}>
                            <NewsCard
                                 profileName={t('Budaya Kota Lumajang')}
                                 description1={("Kebudayaan Lumajang mencerminkan warisan sejarahnya yang kaya dan beragam. Dalam budaya ini, terdapat pengaruh dari masa Majapahit hingga masa kolonial Belanda. Kebudayaan ini memainkan peran penting dalam kehidupan sehari-hari masyarakat Lumajang dan tercermin dalam seni, musik, tarian, dan tradisi lokal.")}
                                 name={t('Nama')}
                                 image={t('Gambar')}
                                 link={t('Link Sumber')}
                                 no={t('No')}

                                 profileName1={t('Tari Khas Lumajang')}
                                 nomor1={"1"}
                                 content1={("Tari Topeng Kaliwungu")}
                                 profileImg1={"/assets/images/kaliwungu.jpg"}
                                 link1={"https://warisanbudaya.kemdikbud.go.id/?newdetail&detailTetap=2902"}

                                 nomor2={"2"}
                                 content2={("Tari Glipang")}
                                 profileImg2={"/assets/images/glipang.jpg"}
                                 link2={"https://www.kompasiana.com/amynaylan2201/58f4c8dbe1afbd482de4f0c3/kesenian-tari-glipang-khas-lumajang"}

                                 nomor3={"3"}
                                 content3={("Tari Godril Lumajang")}
                                 profileImg3={"/assets/images/godril.png"}
                                 link3={"https://warisanbudaya.kemdikbud.go.id/?newdetail&detailCatat=3375"}

                                 nomor4={"4"}
                                 content4={("Tari Bedhaya Lumajang")}
                                 profileImg4={"/assets/images/bedhaya.jpg"}
                                 link4={"https://lumajangsatu.com/baca/tari-bedoyo-disparbud-sambut-penguasa-lumajang"}

                                 nomor5={"5"}
                                 content5={("Tari Kanya Puspita")}
                                 profileImg5={"/assets/images/kanya.jpg"}
                                 link5={"https://jawatimuran.wordpress.com/2012/10/20/kanya-puspita-tarian-khas-kabupaten-lumajang/"}

                                 profileName2={t('Kesenian Musik')}
                                 nomor6={"1"}
                                 content6={("Musik Danglung")}
                                 profileImg6={"/assets/images/danglung.jpg"}
                                 link6={"https://nasional.tempo.co/read/1109670/cita-cita-luhur-lewat-kesenian-musik-danglung"}

                                 nomor7={"2"}
                                 content7={("Harpa Mulut")}
                                 profileImg7={"/assets/images/rinding.jpg"}
                                 link7={"https://www.wisatalumajang.com/single-post/rinding-lumajang-harpa-mulut"}

                                 nomor8={"3"}
                                 content8={("Kesenian Serbung")}
                                 profileImg8={"/assets/images/serbung.jpg"}
                                 link8={"https://www.kompasiana.com/serbungjatimulyo2109/5e42e5e2097f36105b378df4/serbung-kesenian-musik-tradisional-desa-jatimulyo-kabupaten-lumajang"}

                                 profileName3={t('Kesenian Batik')}
                                 nomor9={"1"}
                                 content9={("Batik Lumajang")}
                                 profileImg9={"/assets/images/batik.jpg"}
                                 link9={"https://www.visitlumajang.com/batik-khas-lumajang-miliki-corak-berupa-ikonikon-kota-lumajang/3071"}

                                 profileName4={t('Kesenian Pertunjukan')}
                                 nomor10={"1"}
                                 content10={("Jaran Kecak")}
                                 profileImg10={"/assets/images/kuda kencak.jpg"}
                                 link10={"https://www.wisatalumajang.com/jaran-kencak"}

                                 nomor11={"2"}
                                 content11={("Jaran Slining")}
                                 profileImg11={"/assets/images/jaran slining.jpg"}
                                 link11={"https://warisanbudaya.kemdikbud.go.id/?newdetail&detailCatat=3326"}





                                //  content3={("3. Tari Godril Lumajang")}
                                //  content4={("4. Tari Barong Cokot")}
                                //  content5={("5. Tari Bedhaya Lamajang")}
                            />
                    </Grid>
                
                    <Grid item className={classes.gridItemFix} xs={10} sm={4} lg={3}>
                        <NewsCard1/>
                        <Grid>                    
                                <NewsCard2
                                    profileName= "PENGUMUMAN"
                                    subMenu1= "2023"
                                    subMenu2= "2022"
                                    subMenu3= "2021"
                                    linkName1={t('> PENERIMAAN CALON ASN POLINEMA 2023')}
                                    profileLink1="/item_pengumuman1"
                                    linkName2={t('> Supply Chain Management')}
                                    profileLink2="/item_pengumuman2"
                                    linkName3={t('> Sosialisasi SPK Untuk Meningkatkan Kualitas Hunian')}
                                    profileLink3="/item_pengumuman3"
                                    linkName4={t('> POLINEMA Gelar Wisuda ke-64')}
                                    profileLink4="/item_pengumuman4"
                                    linkName5={t('> Monev Penerima dana Matching Fund Vokasi 2023')}
                                    profileLink5="/item_pengumuman5"
                                    linkName6={t('> Campus – Company Fit and Hiring Program')}
                                    profileLink6="/item_pengumuman6"
                                    linkName7={t('> Raih 6 Penghargaan Pada Apresiasi Program Direktorat APTV 2023')}
                                    profileLink7="/item_pengumuman7"
                                    linkName8={t('> Desain Logo TeFa Polinema')}
                                    profileLink8="/item_pengumuman8" 
                                    linkName9={t('> Civil Creative Competition')}
                                    profileLink9="/item_pengumuman9"
                                />
                            </Grid>
                            <Grid>                    
                            <NewsCard3
                                    profileName= "MENU NAVIGASI"
                                    linkName1={t('Profil Lumajang')}
                                    profileLink1="/profil_lumajang"
                                    linkName2={t('Budaya Lumajang')}
                                    profileLink2="/budaya_lumajang"
                                    linkName3={t('Pariwisata Lumajang')}
                                    profileLink3="/pariwisata_lumajang"
                                    linkName4={t('Kuliner Lumajang')}
                                    profileLink4="/kuliner_lumajang"
                                    linkName5={t('Transportasi Lumajang')}
                                    profileLink5="/transportasi_lumajang"
                                />
                            </Grid>
                    </Grid>
                </Grid>
        </Layout>
        <ChatIcon/>
        </div>
        )}
        </div>
    )
}

const styles = theme => ({
    container: {
        marginLeft: "20px",
        display:"flex"
    },
    card: {
        width: '97%',
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px", 
        backgroundColor:"#FFD700",
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        } 
    },
    cardContent: {
        width: '97%',
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        marginTop:"20px",
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        } 

    },
    media: {
        minHeight: 280,
        [theme.breakpoints.up('xl')]: {
            minHeight: 1366
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: '400px'
        }
    },
    gridItemFix: {
        width: '100%',
        padding: '16px',
        [theme.breakpoints.down('sm')]: {
            padding: '8px'
        }
    },
    contentContainer: {
        width: '100%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '85%'
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95%'
        }
    },
    listItem: {
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'start'
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: 0
    },
    degreeList: {
        listStyleType: 'none'
    },
    avatarBig: {
        width: '200px',
        height: '200px',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            height: '100px'
        }
    },
    listItemTextBig: {
        fontSize: '34px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px'
        }
    },
    videoIframe: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        border: 'none'
    },
    videoIframeContainer: {
        width: '100%',
        height: 0,
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: '56.25%'
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '38px 0',
        textAlign: 'center'
    },
    innerContainer: {
        width: '70%',
        margin: '0 auto'
    },
    sectionText: {
        fontSize: '28px',
        fontWeight: 400,
        lineHeight: 1.5
    },
    heroBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '16px'
    },
    invertedBtn: {
        color: '#051d47',
        backgroundColor: 'transparent',
        border: '2px #051d47 solid',
        boxShadow: 'none'
    },
    spinnerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      spinnerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      popup: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        zIndex: '999',
        textAlign: 'center',
      },
      closeButton: {
        backgroundColor: '#051d47',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        marginTop: '15px',
      },
})

export default withRoot(withStyles(styles)(withTranslation()(budaya_lumajang)))
