import { useState, useMemo} from 'react'

/**Сортировка будет выполнена один раз. До тех пор, пока входные данные не изменятся, новая сортировка происходить не 
будет. Так useMemo() экономит пресурсы. В этом и его предназначение. Позволяет избежать лишних перерендерингов. */

const list = [3,5,9,48,77,6,345,754,2,4,56,765]

const sortList = () => {
  console.log("sort");
  return list.sort((a, b) => a - b)
}

const UseMemo = () => {
  const [update, updateChange] = useState(false)
 
  console.log("app render");

  const sortedList = useMemo(sortList, [])

  return (
    <div>
      {sortedList.map((listItem) => (
        <div key={listItem}> {listItem} </div>
      ))}
      <button onClick={() => updateChange(!update)}> update component </button>
    </div>
  )
}

export default UseMemo