import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

export const useSearchFood = () => {
  const [valorInput, setValorInput] = useState('');
  const [state, setState] = useState({
      data: null,
      isLoading: false,
      errors: null
  })
  useEffect(() => {
    if (!valorInput) {
        setState({
            data: null,
            isLoading: null,
            errors: null
        })
    }
  }, [valorInput])
  
  const buscar = useMemo(async () => {
    setState({
        data: null,
        isLoading: true,
        errors: null
    })
        if (!valorInput) return
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=8dce44ae&app_key=eb97364d86b78240322d35506a8787de&ingr=${valorInput}&nutrition-type=cooking`)
            const data = await response.data.hints
            setState({
                data: data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            console.log(error);
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
  }
  
  , [])

  return { valorInput, setValorInput, buscar, ...state };
};