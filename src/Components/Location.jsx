const Location = ({source}) => {
  return (
    <div className="location__container">
      <div>
        <h4>Nombre:</h4>
        <p>{source.name}</p>
      </div>
      <div>
        <h4>Dimension:</h4>
        <p>{source.dimension}</p>
      </div>
      <div>
        <h4>Codigo:</h4>
        <p>{source.id}</p>
      </div>
      <div>
        <h4>Residentes:</h4>
        <p>{source.residents?.length}</p>
      </div>
    </div>
  )
}

export default Location