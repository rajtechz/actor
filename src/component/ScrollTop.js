import { Group } from '@mantine/core';
import { RiArrowUpSLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Group position="center">

            {showButton && (
                <RiArrowUpSLine onClick={handleScrollTop} style={{ background: "#f7dc4f", height: "50px", width: "50px", borderRadius: "50%", position: "fixed", bottom: "100px", color: "dark", right: "5%" }} />
            )}
        </Group>
    );
}
