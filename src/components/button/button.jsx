const alertLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = ({label = "Baixar curriculo"}) => {
    return (
        <>
            <button onClick={() => alertLabel(label)}>{label}</button>
        </>
    )
}

export default Button;