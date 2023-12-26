import styles from './style.module.css';

const HeaderCompStandard = ({mode, setMode}) => {
  
  return (
    <div className={styles.container}>
        <div className="flex flex-col h-8">
             

            <div className="flex flex-row">
                <div className="w-0 md:w-1/4"></div>
                <div className="w-full md:w-1/2"></div>
                <div className="w-0 md:w-1/4"><button className="rounded p-1 bg-stone-100 text-gray-400 border-0 text-xs" onClick={() => setMode(!mode)}>Bright/Dark</button></div>  
                
            </div>            
            
        </div>
        
    </div>
    
  )
}
export default HeaderCompStandard;
