import HTMLFlipBook from "react-pageflip";
import { forwardRef, useState, useEffect } from "react";
import styles from './book.module.css';
import Image from "next/image";
import MyImage from './image.webp';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const Page = forwardRef((props, ref) => {
    return (
        <div className={styles['flip-book']} ref={ref}>
            <div className={styles.page}>
                <div className={styles['page-content']}>
                    <h1 className={styles['page-header']}>
                        Page Header
                    </h1>
                    <div className={styles['page-text']}>
                        {props.children}
                    </div>
                    <div className={styles['page-footer']}>
                        <p>Halaman {props.number}</p>
                    </div>
                </div>
            </div>
        </div>
    );
});



export default function Books(props) {

    const size = useWindowSize();
    return (
        <HTMLFlipBook width={size.width < 968 ? size.width : size.width / 2} height={size.height < 968 ? 700 : '100vh'} size="fixed" 
            minWidth={312}
            maxWidth={size.width}
            minHeight={size.height}
            maxHeight={size.height}
            maxShadowOpacity={0.5}
            showCover={false}>
            <Page number="1">
                <img src="https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_960_720.jpg"  width="100%" height={200}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                </p>
                <p>            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                </p>
                <p>            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                </p>
                <p>            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic eligendi dignissimos exercitationem molestiae pariatur ipsum impedit culpa temporibus laboriosam rerum nisi, amet maxime. Nam nisi fugiat sint. Qui, facere?
                </p>
            </Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
        </HTMLFlipBook>
    );
}