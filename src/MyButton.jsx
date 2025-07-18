import './MyButton.css';
export default function MyButton({ link, children }) { 
    return (
            <div className="tombol">
            <a href={link}><button>{children}</button></a></div>  
        

    )
}