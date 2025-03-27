
const input_form = () => {

    const change = ()=>{
        document.getElementById('entry').style.display = 'none';
        const card = document.getElementById('show');
        card.style.display = 'flex';
    }
    return(
        <div>
            <input type="text" placeholder="name" className="name" />
            <button onClick={change}>display</button>
        </div>
    )
}

export default input_form;