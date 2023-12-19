import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Layout from '../../components/Layout'
import TextSection from '../../components/TextSection'
import withRoot from '../../components/withRoot'
import SlideShow from '../../components/SlideShow'
import SlideShow_Galeri from '../../components/SlideShow_Galeri'
import NewsCard from '../../components/NewsCard_Home'
import { withTranslation } from 'react-i18next'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import MarqueeText from '../../components/MarqueeText'
import ChatIcon from '../../components/ChatIcon'
import NewsCard_Galeri from '../../components/NewsCard_Galeri'
import Galeri from './galeri'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect';


const HomePage = (props) => {
    const [data, setData] = useState([]);
    const { classes} = props
    const { t } = useTranslation();

    const [beritaData, setBeritaData] = useState([]);
    const [departmentData, setDepartmentData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8080/api/berita') // Pastikan URL endpoint sesuai
        .then(response => response.json())
        .then(data => {
            setData([data.content]);
            console.log(data.content);
        })
        .catch(error => {
            console.error(error);
        });
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
        <Layout title="Home" >
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
            <MarqueeText/>
            <SlideShow />
            <TextSection
                text={t('home.label')}
                bgColor="#051d47"
                textColor="#fff"
                borderColor="#998643"
                padding="12px 0"
                darkBg={true}
                
            />
            {/* <NewsCardCounter profileName={t('Pengunjung')}  /> */}

            <div style={{backgroundImage: 'url("/assets/images/bg_polinema2.png")', backgroundRepeat: 'repeat', backgroundSize: 500}}>
            <Grid container className={classes.contentContainer}>
                <Grid item className={classes.gridItemFix} xs={12}>
                    <Typography
                        variant="display2"
                        gutterBottom
                        style={{ textAlign: 'center', color: '#051d47' }}
                    >
                        {t('profil.label')}
                    </Typography>
                    <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
                        <iframe
                            className={classes.videoIframe}
                            src="https://www.youtube.com/embed/ctipi_DBBdA"
                            title="YouTube video: Be Singular."
                            frameBorder="0"
                            allow="encrypted-media"
                            allowFullScreen
                        />
                    </Card>
                </Grid>
            </Grid>
            </div>

            <div className={classes.containerSection} style={{backgroundImage: 'url("/assets/images/bg_polinema2.png")', backgroundRepeat: 'repeat', backgroundSize: 500}}>
                <div className={classes.section}>
                    <div className={classes.innerContainer}>
                        <Typography variant="display2" style={{ color: '#051d47' }} gutterBottom>
                            {t('beritakampus.label')}
                        </Typography>
                    </div>
                </div>
                <Grid container className={classes.contentContainer}>
                    <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={4}>
                    {data.map((item, index) => (
                        <NewsCard
                            key={index}
                            Img={item[0].data}
                            profileName={item[0].name}
                            content={item[0].selengkapnya}
                            profileLink={"/item_pengumuman1"}
                            link={t("selengkapnya →")}
                            bgContain
                        />
                    ))}
                    </Grid>

                    <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={4}>
                    {data.map((item, index) => (
                        <NewsCard
                           key={index}
                           Img={item[1].data}
                           profileName={item[1].name}
                           content={item[1].selengkapnya}
                           profileLink={"/item_pengumuman2"}
                           link={t("selengkapnya →")}
                           bgContain
                        />
                    ))}
                    </Grid>

                    <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={4}>
                    {data.map((item, index) => (
                        <NewsCard
                           key={index}
                           Img={item[2].data}
                           profileName={item[2].name}
                           content={item[2].selengkapnya}
                           profileLink={"/item_pengumuman3"}
                           link={t("selengkapnya →")}
                           bgContain
                        />
                    ))}
                    </Grid>
                </Grid>


                <div style={{ textAlign: 'center', padding: 20 }}>
                    <Button style={{ backgroundColor: '#fbb555', fontWeight: 'bold' }} href="/pengumuman" >{t("Tampilkan Berita")}</Button>
                </div>
                {/* <SlideShow_Galeri /> */}
             <Galeri/>

            </div>
            
            <ChatIcon />
        </Layout >
    )
}

const styles = theme => ({
    white: {
        color: '#fff'
    },
    card: {
        width: '100%'
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

export default withRoot(withStyles(styles)(withTranslation()(HomePage)))
