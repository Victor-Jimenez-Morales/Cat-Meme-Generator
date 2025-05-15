export function getCatImageUrl ({ text }) {
  return fetch(`https://cataas.com/cat/says/${text}?position=center&width=300&height=300&font=Impact&fontSize=50&fontColor=%23fff&json=true`)
    .then(res => res.json())
    .then(data => {
      const { url } = data
      return url
    })
}
