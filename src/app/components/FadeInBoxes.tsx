import React, {useEffect} from 'react';
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTriggerの初期化
Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});

const FadeInBoxes  = () => {
    const ref = useRef(null);

    const layouts = [1,2,3]

    // レイアウト作成後の動作
    useEffect(() => {
        // スクロールして要素が表示されるとフェードイン表示する
        Gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: 'top center',
                once: true,
            },
            opacity: 1,
            duration: 1
        });
    }, [ref]);

    // Render
    return (
        <div className="fade">
            layouts.map((layout)=>(
                <>
                    {/* 「ref」を設定する */}
                    <div className="fade_init" id="fadeInBox" ref={ref} >{layout}</div>
                </>
            ))
        </div>
    );
}
