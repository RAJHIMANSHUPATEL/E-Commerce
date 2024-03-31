export const formatPrice = (number) => {
    return Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
}

export const getUniqueValues = () => {}
