import { useState } from 'react';
import styles from  './Content.module.css'

function Content() {

    console.log('Content is running');

    const [amount, setAmount] = useState(0);
    
    let content; 
    
    const [changeOfState, setChangeOfState] = useState(true); 
    
    if(changeOfState) {
            
        content = ( 
            <>
            <h2 className={styles.heading2}>Контент 1</h2>
            <p className={styles.text2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio magnam esse, quo ad eveniet odio perferendis sapiente doloribus distinctio molestias maiores facilis eaque aliquid neque accusantium atque harum accusamus error consequuntur blanditiis itaque quaerat ex praesentium. Officia voluptates eius vitae ipsum unde voluptatum assumenda, quisquam amet aliquam corrupti maxime odit praesentium ipsa expedita neque rerum itaque dolorem nam beatae, incidunt ab, facere eaque. Nihil, architecto reprehenderit quae dolore quaerat cupiditate accusamus. Atque eveniet, natus nulla, consequuntur velit unde beatae nesciunt reiciendis odit assumenda aliquam ipsam facere officia. Laborum vel velit neque temporibus, facilis reiciendis accusantium ad, unde quisquam aliquid, autem amet in sed cum dolorem totam incidunt voluptatum odit vitae nostrum. Ex nostrum inventore ea aliquid, vitae, incidunt doloremque laborum voluptatum natus maiores sapiente dolore qui minima quis ad tempora quod amet, fugiat praesentium sit ipsum? Iusto, itaque deserunt quidem quasi voluptates velit! Hic doloremque voluptas asperiores praesentium, placeat laborum veniam explicabo quasi dignissimos cupiditate, delectus magni eum quod ex id accusantium? Maxime, officia! Suscipit odit nobis voluptate eum mollitia nam similique corrupti, id modi veritatis tempore, earum tempora obcaecati iste, totam numquam. Vero inventore nostrum sapiente asperiores optio voluptates iusto maxime doloribus adipisci quos nemo eligendi, laboriosam omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio magnam esse, quo ad eveniet odio perferendis sapiente doloribus distinctio molestias maiores facilis eaque aliquid neque accusantium atque harum accusamus error consequuntur blanditiis itaque quaerat ex praesentium. Officia voluptates eius vitae ipsum unde voluptatum assumenda, quisquam amet aliquam corrupti maxime odit praesentium ipsa expedita neque rerum itaque dolorem nam beatae, incidunt ab, facere eaque. Nihil, architecto reprehenderit quae dolore quaerat cupiditate accusamus. Atque eveniet, natus nulla, consequuntur velit unde beatae nesciunt reiciendis odit assumenda aliquam ipsam facere officia. Laborum vel velit neque temporibus, facilis reiciendis accusantium ad, unde quisquam aliquid, autem amet in sed cum dolorem totam incidunt voluptatum odit vitae nostrum. Ex nostrum inventore ea aliquid, vitae, incidunt doloremque laborum voluptatum natus maiores sapiente dolore qui minima quis ad tempora quod amet, fugiat praesentium sit ipsum?</p>            
        </>      
    );
        }else{       
       
     content = (                 
         <>
             <h2 className={styles.heading}>Контент 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio magnam esse, quo ad eveniet odio perferendis sapiente doloribus distinctio molestias maiores facilis eaque aliquid neque accusantium atque harum accusamus error consequuntur blanditiis itaque quaerat ex praesentium. Officia voluptates eius vitae ipsum unde voluptatum assumenda, quisquam amet aliquam corrupti maxime odit praesentium ipsa expedita neque rerum itaque dolorem nam beatae, incidunt ab, facere eaque. Nihil, architecto reprehenderit quae dolore quaerat cupiditate accusamus. Atque eveniet, natus nulla, consequuntur velit unde beatae nesciunt reiciendis odit assumenda aliquam ipsam facere officia. Laborum vel velit neque temporibus, facilis reiciendis accusantium ad, unde quisquam aliquid, autem amet in sed cum dolorem totam incidunt voluptatum odit vitae nostrum. Ex nostrum inventore ea aliquid, vitae, incidunt doloremque laborum voluptatum natus maiores sapiente dolore qui minima quis ad tempora quod amet, fugiat praesentium sit ipsum? Iusto, itaque deserunt quidem quasi voluptates velit! Hic doloremque voluptas asperiores praesentium, placeat laborum veniam explicabo quasi dignissimos cupiditate, delectus magni eum quod ex id accusantium? Maxime, officia! Suscipit odit nobis voluptate eum mollitia nam similique corrupti, id modi veritatis tempore, earum tempora obcaecati iste, totam numquam. Vero inventore nostrum sapiente asperiores optio voluptates iusto maxime doloribus adipisci quos nemo eligendi, laboriosam omnis?</p>            
         </>      
     );
        }
    

    function onClick($event) {
        console.log($event, 'on click');
        setAmount(amount + 1);
    }    

    return (
    <div className={styles.content}>        
        {content}
        <div onClick={() => {setAmount(amount -1)}}>Amount: {amount}</div>
        <button onClick={onClick}>Click</button>
        <button onClick={($event) => {
            if($event.altKey) {
                setAmount(0);
            }else if($event.ctrlKey){
                setAmount(-10);
            }else{
                setAmount(9);
            }

            }}>Reset</button>
            <button className={styles.changeOfState} onClick={() => setChangeOfState(!changeOfState)}>content change</button>
    </div>);      
}

export default Content;

