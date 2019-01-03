import ActionTypes from "../actions/ActionTypes";

export const products = (
    state = {
        products: [
            {
                id: "001",
                name: "Dry Skin Bar Soap - 3oz",
                category: "bar-soaps",
                price: 43.34,
                image: "/static/images/product_img.jpg",
                features: [
                    "feature  1",
                    "feature  2",
                    "feature  3",
                    "feature  4",
                ],
                description: "This Antibacterial 2 in 1 moisturizing & nourishing liquid hand soap with pro- Vitamin B5 effectively removes dirt, protects against germs, kills 99.99% of bacteria encountered in household environment. Our unique formula infused with hydrating and soothing moisturizer helps reduce skin dryness to give you soft, smooth healthy looking squeaky clean hands."
            },
            {
                id: "002",
                name: "Medicated Ointment - 1oz",
                category: "medicated-ointment",
                price: 33.34,
                image: "/static/images/product_img.jpg",
                features: [
                    "feature  1",
                    "feature  2",
                    "feature  3",
                    "feature  4",
                ],
                description: "This Antibacterial 2 in 1 moisturizing & nourishing liquid hand soap with pro- Vitamin B5 effectively removes dirt, protects against germs, kills 99.99% of bacteria encountered in household environment. Our unique formula infused with hydrating and soothing moisturizer helps reduce skin dryness to give you soft, smooth healthy looking squeaky clean hands."
            },
            {
                id: "003",
                name: "6 Pack Original Scent Bar Soap - 5.25oz",
                category: "antibacterial-soap",
                price: 3.34,
                image: "/static/images/product_img.jpg",
                features: [
                    "feature  1",
                    "feature  2",
                    "feature  3",
                    "feature  4",
                ],
                description: "This Antibacterial 2 in 1 moisturizing & nourishing liquid hand soap with pro- Vitamin B5 effectively removes dirt, protects against germs, kills 99.99% of bacteria encountered in household environment. Our unique formula infused with hydrating and soothing moisturizer helps reduce skin dryness to give you soft, smooth healthy looking squeaky clean hands."
            },
            {
                id: "004",
                name: "Original Scent Bar Soap - 5.25oz",
                category: "body-lotion",
                price: 31.34,
                image: "/static/images/product_img.jpg",
                features: [
                    "feature  1",
                    "feature  2",
                    "feature  3",
                    "feature  4",
                ],
                description: "This Antibacterial 2 in 1 moisturizing & nourishing liquid hand soap with pro- Vitamin B5 effectively removes dirt, protects against germs, kills 99.99% of bacteria encountered in household environment. Our unique formula infused with hydrating and soothing moisturizer helps reduce skin dryness to give you soft, smooth healthy looking squeaky clean hands."
            }
        ]
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            };
        };
    }

    return state;
};

export const order = (
    state = {
        products: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CART: {
            return {
                ...state,
                products: action.payload
            };
        };
    }

    return state;
};