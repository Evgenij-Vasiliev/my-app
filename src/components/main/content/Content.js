import { useState } from 'react';
import  './Content.css'


function Content() {
    // const [turned, setTurned] = useState(true);
    console.log('Content is running');

    const [amount, setAmount] = useState(0);
    
    let content;

    let date = new Date();
    let seconds = date.getSeconds()
    if( seconds > 30) {        
        content = (
            <>
            <h2 className="heading2">Контент 1</h2>
            <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio magnam esse, quo ad eveniet odio perferendis sapiente doloribus distinctio molestias maiores facilis eaque aliquid neque accusantium atque harum accusamus error consequuntur blanditiis itaque quaerat ex praesentium. Officia voluptates eius vitae ipsum unde voluptatum assumenda, quisquam amet aliquam corrupti maxime odit praesentium ipsa expedita neque rerum itaque dolorem nam beatae, incidunt ab, facere eaque. Nihil, architecto reprehenderit quae dolore quaerat cupiditate accusamus. Atque eveniet, natus nulla, consequuntur velit unde beatae nesciunt reiciendis odit assumenda aliquam ipsam facere officia. Laborum vel velit neque temporibus, facilis reiciendis accusantium ad, unde quisquam aliquid, autem amet in sed cum dolorem totam incidunt voluptatum odit vitae nostrum. Ex nostrum inventore ea aliquid, vitae, incidunt doloremque laborum voluptatum natus maiores sapiente dolore qui minima quis ad tempora quod amet, fugiat praesentium sit ipsum? Iusto, itaque deserunt quidem quasi voluptates velit! Hic doloremque voluptas asperiores praesentium, placeat laborum veniam explicabo quasi dignissimos cupiditate, delectus magni eum quod ex id accusantium? Maxime, officia! Suscipit odit nobis voluptate eum mollitia nam similique corrupti, id modi veritatis tempore, earum tempora obcaecati iste, totam numquam. Vero inventore nostrum sapiente asperiores optio voluptates iusto maxime doloribus adipisci quos nemo eligendi, laboriosam omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio magnam esse, quo ad eveniet odio perferendis sapiente doloribus distinctio molestias maiores facilis eaque aliquid neque accusantium atque harum accusamus error consequuntur blanditiis itaque quaerat ex praesentium. Officia voluptates eius vitae ipsum unde voluptatum assumenda, quisquam amet aliquam corrupti maxime odit praesentium ipsa expedita neque rerum itaque dolorem nam beatae, incidunt ab, facere eaque. Nihil, architecto reprehenderit quae dolore quaerat cupiditate accusamus. Atque eveniet, natus nulla, consequuntur velit unde beatae nesciunt reiciendis odit assumenda aliquam ipsam facere officia. Laborum vel velit neque temporibus, facilis reiciendis accusantium ad, unde quisquam aliquid, autem amet in sed cum dolorem totam incidunt voluptatum odit vitae nostrum. Ex nostrum inventore ea aliquid, vitae, incidunt doloremque laborum voluptatum natus maiores sapiente dolore qui minima quis ad tempora quod amet, fugiat praesentium sit ipsum? Iusto, itaque deserunt quidem quasi voluptates velit! Hic doloremque voluptas asperiores praesentium, placeat laborum veniam explicabo quasi dignissimos cupiditate, delectus magni eum quod ex id accusantium?</p>            
        </>      
    );       
    } else {   
    content = (                 
        <>
            <h2 className="heading">Контент 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio magnam esse, quo ad eveniet odio perferendis sapiente doloribus distinctio molestias maiores facilis eaque aliquid neque accusantium atque harum accusamus error consequuntur blanditiis itaque quaerat ex praesentium. Officia voluptates eius vitae ipsum unde voluptatum assumenda, quisquam amet aliquam corrupti maxime odit praesentium ipsa expedita neque rerum itaque dolorem nam beatae, incidunt ab, facere eaque. Nihil, architecto reprehenderit quae dolore quaerat cupiditate accusamus. Atque eveniet, natus nulla, consequuntur velit unde beatae nesciunt reiciendis odit assumenda aliquam ipsam facere officia. Laborum vel velit neque temporibus, facilis reiciendis accusantium ad, unde quisquam aliquid, autem amet in sed cum dolorem totam incidunt voluptatum odit vitae nostrum. Ex nostrum inventore ea aliquid, vitae, incidunt doloremque laborum voluptatum natus maiores sapiente dolore qui minima quis ad tempora quod amet, fugiat praesentium sit ipsum? Iusto, itaque deserunt quidem quasi voluptates velit! Hic doloremque voluptas asperiores praesentium, placeat laborum veniam explicabo quasi dignissimos cupiditate, delectus magni eum quod ex id accusantium? Maxime, officia! Suscipit odit nobis voluptate eum mollitia nam similique corrupti, id modi veritatis tempore, earum tempora obcaecati iste, totam numquam. Vero inventore nostrum sapiente asperiores optio voluptates iusto maxime doloribus adipisci quos nemo eligendi, laboriosam omnis?</p>
            
        </>      
    );
    }

    function onClick() {
        console.log('on click');
        setAmount(amount + 1);
    }

    return (
    <div className="content">
        {seconds}
        {content}
        <div>Amount: {amount}</div>
        <button onClick={onClick}>Click</button>
    </div>);      
}

export default Content;

