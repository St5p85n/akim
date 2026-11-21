const tableContent = (nom,index) => {
    return  `
             <tr>
                <td>${nom}</td>
                <td> <button id="btR">supprimer</button></td>
            </tr>
            `
}

export {tableContent}