import styles from "@styles/NavBar.module.css"
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@components/SearchBar";

const NavBar = () => {

    return (
        <nav className={styles.nav_bar}>
            <Link href="/" className={styles.logo_link}>
                <Image
                    src='/assets/icons/logo.svg'
                    alt='logo'
                    width={50}
                    height={50}
                    className={styles.nav_img}
                />
            </Link>

            {/* Desktop */}
            <div className={styles.logo_link}>
                <SearchBar />
                <Link href="/" className={styles.logo_link}>
                    <Image
                        src='/assets/icons/profile.svg'
                        alt='logo'
                        width={50}
                        height={50}
                        className={styles.nav_img}
                    />
                </Link>
            </div>

            {/* Mobile */}
            
        </nav >
    );
};

export default NavBar;