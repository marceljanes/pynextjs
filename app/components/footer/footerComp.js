import styles from './style.module.css';

const FooterCompStandard = () => {
  
  return (
    <div className={styles.container}>
        <div className="flex flex-row">            
            <div className="w-1/4"></div>
            <div className="w-1/2 text-xs">Made with 🥰 in Berlin @2024</div>
            <div className="w-1/4"></div>
        </div>
        
    </div>
    
  )
}
export default FooterCompStandard;
