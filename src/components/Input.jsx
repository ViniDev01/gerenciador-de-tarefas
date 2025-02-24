function Input(props) {
    return (
        <input {...props} 
                   
            className="border border-slate-300 outline-slate-400 w-full p-2 rounded-md" 

            // Pode ser assim também
            // type={props.type}
            // placeholder={props.placeholder}
            // value={props.value} 
            // onChange={props.onChange}
        />
    )
}

export default Input;