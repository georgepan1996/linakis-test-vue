import {defineStore} from "pinia";
import {reactive, ref} from "vue";

export const useProductsStore = defineStore('productsStore', () => {
    const product = reactive({
        id: 0,
        title: '',
        price: 0,
        status: 'available',
        description: '',
        imageUrl: ''
    })
    const productStatuses = [
        {value: 1, text: 'Available'},
        {value: 2, text: 'Unavailable'},
    ]
    const products = ref([
        {
            id: 1,
            title: 'Prod 1',
            price: 12.34,
            status: 'available',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam ligula, scelerisque vel mi quis, tristique tempor nibh. Vestibulum consectetur nibh neque, ut rutrum purus lacinia non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, mi sit amet bibendum consectetur, sem felis tempor justo, vitae ornare odio nisl et mauris. Cras rhoncus eu erat id faucibus. Aenean ac tellus efficitur, mattis sapien id, scelerisque odio.Z',
            imageUrl: 'https://www.sidechef.com/recipe/07cda902-c00b-4391-b05e-4e362953840e.jpg?d=1408x1120'
        },
        {
            id: 2,
            title: 'Prod 2',
            price: 10.30,
            status: 'available',
            description: 'Desc',
            imageUrl: ''
        },
        {
            id: 3,
            title: 'Prod 3',
            price: 9.00,
            status: 'available',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam ligula, scelerisque vel mi quis, tristique tempor nibh. Vestibulum consectetur nibh neque, ut rutrum purus lacinia non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, mi sit amet bibendum conscelerisque odio.',
            imageUrl: 'https://media.istockphoto.com/id/1289040542/photo/baked-dorado-fish-on-a-plate-with-vegetables-top-view.jpg?s=612x612&w=0&k=20&c=IayJHQPzH_nsq6Z8sq08YDf9M3IkmLSo5uNkS0w1PLU='
        },
        {
            id: 4,
            title: 'Prod 4',
            price: 12,
            status: 'available',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam ligula, scelerisque vel mi quis, tristique tempor nibh. Vestibulum consectetur nibh neque, ut rutrum purus lacinia non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, mi sit amet bibendum consectetur, sem feellus efficitur, mattis sapien id, scelerisque odio.',
            imageUrl: 'https://cdn.w600.comps.canstockphoto.com/grilled-whole-fish-on-black-plate-stock-photos_csp51067735.jpg'
        },
        {
            id: 4,
            title: 'Prod 5',
            price: 12.45,
            status: 'unavailable',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam ligula, scelerisque vel mi quis, tristique tempor nibh. Vestibulum consectetur nibh neque, ut rutrum purus lacinia non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, mi sit amet bibendum consectetur, sem felis tempor justo, vitae ornare odio nisl et mauris. Cras rhoncus eu erat id faucibus. Aenean ac tellus efficitur, mattis sapien id, scelerisque odio.',
            imageUrl: 'https://i0.wp.com/www.kalofagas.ca/wp-content/uploads/2009/07/FB_IMG_1590696314277-02.jpeg?fit=1080%2C771&ssl=1'
        },
        {
            id: 5,
            title: 'Prod 6',
            price: 22.40,
            status: 'available',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam ligula, scelerisng elit. Aliquam tincidunt, mi sit amet bibendum consectetur, sem felis tempor justo, vitae ornare odio nisl et mauris. Cras rhoncus eu erat id faucibus. Aenean ac tellus efficitur, mattis sapien id, scelerisque odio.',
            imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/12/Lobster-Platter-1.jpg'
        },
    ])

    const addedToCart = ref([])
    async function addToCart (prod) {
        const prodToAdd = prod
        const prodAddedIndex = addedToCart.value.findIndex(addedProd => addedProd.id === prodToAdd.id)
        if(prodAddedIndex > -1) {
            addedToCart.value[prodAddedIndex].quantity += 1;
        } else {
            prodToAdd.quantity = 1;
            addedToCart.value.push(prodToAdd);
        }
    }

    function getTotalPrice (price, quantity) {
        return (price * quantity).toFixed(2)
    }

    function getSum(total, quantity) {
        return total + quantity;
    }

    return {
        products,
        product,
        addToCart,
        getTotalPrice,
        getSum,
        addedToCart
    }
}, {
    persist: {
        storage: localStorage,
        paths: ['products', 'addedToCart']
    }
})
