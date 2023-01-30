// коряво выглядит, но креатива хватило только на такое
import MetaTags from 'utils/MetaTags';
import styles from './Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {RevealWrapper} from  'next-reveal'
const Gallery = () => {
  // много изображений 
  const img =[
    {id:1,url:'https://media.istockphoto.com/id/173868486/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BA.jpg?s=612x612&w=is&k=20&c=u9ojOBpiqY02JKyrBxQkej1MsSft2RWov1gGJHRVaKo='},
    {id:2,url:'https://media.istockphoto.com/id/519687055/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D0%BE%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=d0-83GrIydsG_3d-zXRva8NQx1d9rTsCj7myOtG5BHE='},
    {id:3,url:'https://media.istockphoto.com/id/463123467/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2-%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=bsctSN_zycWRuMPXymWFxmP5qv2xYCa2SUvblEhqJd4='},
    {id:4,url:'https://media.istockphoto.com/id/173868486/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=c4lD6HsK3AX3TZLMxcVFlE5EZid6fWRUeT-hGp_LEm4='},
    {id:5,url:'https://media.istockphoto.com/id/1372896722/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D1%88%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=5ORk78aJ49BvmLBEePnJvQNqYY_u1fxzJS_cCK_RCPw='},
    {id:6,url:'https://media.istockphoto.com/id/1330360581/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BE%D1%80%D1%88%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=_WgFQslZI1jFwgVyZle3QQleFxws6kqYhoFM2zjbebc='},
    {id:7,url:'https://media.istockphoto.com/id/155161126/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B3%D0%BE%D1%80%D1%82%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F-%D0%B2-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=ZjAIt_VCpsTuo5iAbk_WiAYrUWMJB1cUD2uLutPT3UI='},
    {id:8,url:'https://media.istockphoto.com/id/1380361370/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B2%D0%B0%D0%B7%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=I3OqzaXqqrCFyYdJe1UMzNkkBtuYeVUEHOKcQAjMck8='},
    {id:9,url:'https://media.istockphoto.com/id/1254913138/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%B8%D0%B3%D0%B0%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-monstera-%D0%B2-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%BC-%D0%B3%D0%BE%D1%80%D1%88%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81-%D0%BE%D1%82%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BF%D1%83%D1%82%D0%B8.jpg?s=1024x1024&w=is&k=20&c=QZgKIFqhgSysV2uWQCxTKtDHMNRlLpynXqnURzM-G4o='},
    {id:10,url:'https://media.istockphoto.com/id/1250416514/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BC%D0%B5%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B9-sansevieria-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5%D0%BB%D1%8B%D1%85.jpg?s=1024x1024&w=is&k=20&c=FeXiFraKkJmlrk3bxdDyRRAIoVutOSgAktEmROPoHEM='},
    {id:11,url:'https://media.istockphoto.com/id/956369698/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D0%B2-%D0%B3%D0%BE%D1%80%D1%88%D0%BA%D0%B5.jpg?s=1024x1024&w=is&k=20&c=mjLQxGl4cZ_BjYtUg_LtvwY2SzZxtQxtDs4Q5ItxAkk='},
    {id:12,url:'https://media.istockphoto.com/id/1144381187/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0-%D0%BF%D0%BE%D1%81%D0%B0%D0%B4%D0%B8%D0%BB%D0%B8-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BA%D0%B5%D1%80%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-3d.jpg?s=1024x1024&w=is&k=20&c=-g5yYdlcBLA6Nm4hUPZ3i1RcJYRipgwbBJYb9JJryfI='}
  ]
  return (
    <>
    <MetaTags title='Фотки'/>
        <div className={styles.gallery}>
          <ul className={styles.gallery__ul}>
          {img.map(({id,url})=>
            <li className={styles.gallery__li} key={id}>
              <RevealWrapper>
              <Link href={url}>
                <Image width={400} height={500} src={url} alt='flower'/>
              </Link>
              </RevealWrapper>
            </li>
            )
          }
          </ul>
        </div>   
    </>
  );
}
export default Gallery;
