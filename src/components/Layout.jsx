import Nav from './Nav';
import classes from '../styles/Layout.module.css';


// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    );
}