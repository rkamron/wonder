import Link from 'next/link'
import React from 'react';
import styles from './header.module.css';
import { ChevronRight } from 'lucide-react';
import { Button } from '../button';

const  Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}> <h1>Wonder</h1> </div>

            <div className={styles.buttons}>
                
                <div className = {styles.links}><Link href = "/home">Home</Link></div>

                <div className = {styles.links}><Link href = "/home/info"> Stock Info </Link></div>
                
                <div className = {styles.links}><Link href = "/home/graph"> Price Predicter </Link></div>

            </div>

            <div className = {styles.hide}> <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button> </div>
        </nav>
    );
};

export default Navbar;