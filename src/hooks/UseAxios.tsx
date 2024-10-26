import axios from "axios"
import { useEffect, useState } from "react"


function useAxios(url: string, method: string) {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    axios({
      method: method,
      url: url,
    }).then( data => setData(data))
  }, [url])

  return [data]

}

export default useAxios