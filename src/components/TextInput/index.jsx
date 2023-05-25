import './style.css'

export const TextInput = ({searchValue,postsFilter , handleChange}) => {
    return (
        <>
            {!!searchValue &&
                <>
                    <h1>Search Value: {searchValue}</h1><br /><br />
                    <h4>Quantidade de resultados: {!!postsFilter.length ?
                        postsFilter.length
                        :
                        "Sem nenhum resultado"
                    }</h4>
                </>
            }

            <input
                onChange={handleChange}
                value={searchValue}
                type='search' 
                placeholder='Search:'
                />
                
            <br/>
        </>
    )
}