// Type defination
interface ProductItem {
    id: number
    name: string
    brand: string
    gender: string
    category: string
    price: number
    is_in_inventory: boolean
    items_left: number
    imageURL: string
    slug: string
    added?: boolean
}

// Data to be used in the App
const InitialState: ProductItem[] = [
    {
        id: 1,
        name: "SB Zoom Blazer Mid",
        brand: "Nike",
        gender: "WOMEN",
        category: "Skate",
        price: 74.95,
        is_in_inventory: true,
        items_left: 7,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc3ac15b-ef14-404d-80d6-938d887db635/sb-zoom-blazer-mid-skate-shoe-17FxBf.jpg",
        slug: "sb-zoom-blazer-mid",
    },
    {
        id: 2,
        name: "Phantom Scorpion Elite FG",
        brand: "Nike",
        gender: "WOMEN",
        category: "Football",
        price: 239.90,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.Nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c9f72633-7124-48d4-8b45-844ddd2c1546/phantom-scorpion-elite-fg-football-boot-v6sP0d.jpg",
        slug: "phantom-scorpion-elite-fg",
    },
    {
        id: 3,
        name: "Air Zoom Tempo NEXT",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 169.95,
        is_in_inventory: false,
        items_left: 0,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/032f4f9d-85c4-4b17-aaa6-9dbaff1f7c02/air-zoom-tempo-next-running-shoe-52RMRT.jpg",
        slug: "air-zoom-tempo-next",
    },
    {
        id: 4,
        name: "Air Zoom Pegasus 37 Premium",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 114.95,
        is_in_inventory: true,
        items_left: 4,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/21ba6b83-30bd-4e3c-81ca-1cce6c9d20a6/air-zoom-pegasus-37-running-shoe-XPrmP5.jpg",
        slug: "air-zoom-pegasus-37-premium",
    },
    {
        id: 5,
        name: "Legend React 3 Shield",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 94.95,
        is_in_inventory: true,
        items_left: 11,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5d4c177-4ca1-472a-9c87-d693c3c6dcc6/legend-react-3-shield-running-shoe-wDskG9.jpg",
        slug: "legend-react-3-shield",
    },
    {
        id: 6,
        name: "SB Zoom Stefan Janoski RM",
        brand: "Nike",
        gender: "WOMEN",
        category: "Skate",
        price: 69.95,
        is_in_inventory: true,
        items_left: 21,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/25708a54-c398-4d4e-a94e-d15bcf4a0b8a/sb-zoom-stefan-janoski-rm-skate-shoe-wrdqPL.jpg",
        slug: "sb-zoom-stefan-janoski-rm",
    },
    {
        id: 7,
        name: "Nike Revolution 5",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 47.95,
        is_in_inventory: true,
        items_left: 8,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf895ce2-802a-46f5-b02c-e0805577268a/revolution-5-running-shoe-0pK0GD.jpg",
        slug: "Nike-revolution-5",
    },
    {
        id: 8,
        name: "Metcon 6",
        brand: "Nike",
        gender: "WOMEN",
        category: "Training",
        price: 114.95,
        is_in_inventory: false,
        items_left: 0,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccaf9fcf-f0db-47f4-a734-f43b42aeeed0/metcon-6-training-shoe-78352H.jpg",
        slug: "metcon-6",
    },
    {
        id: 9,
        name: "ZoomX Vaporfly NEXT",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 239.95,
        is_in_inventory: true,
        items_left: 11,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-T5qg9m.jpg",
        slug: "zoomx-vaporfly-next",
    },
    {
        id: 10,
        name: "Zoom Double-Stacked",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 189.95,
        is_in_inventory: true,
        items_left: 5,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a79c7fb6-6a05-4782-8e59-b867daeb10de/zoom-double-stacked-shoe-ZV1VDL.jpg",
        slug: "zoom-double-stacked",
    },
    {
        id: 11,
        name: "Air Max 2090",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 129.95,
        is_in_inventory: true,
        items_left: 7,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e70aec23-aa5c-4a6d-8710-34ef87ef6cf7/air-max-2090-shoe-lXwVLp.jpg",
        slug: "air-max-2090",
    },
    {
        id: 12,
        name: "Air Zoom Pegasus 37 FlyEase",
        brand: "Nike",
        gender: "WOMEN",
        category: "Running",
        price: 104.95,
        is_in_inventory: false,
        items_left: 0,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/754c4595-e7f2-4c54-b3a1-25bf92880a35/air-zoom-pegasus-37-flyease-running-shoe-72V3cc.jpg",
        slug: "air-zoom-pegasus-37-flyease",
    },
    {
        id: 13,
        name: "React Infinity Run Flyknit",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 160,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.Nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
        slug: "react-infinity-run-flyknit",
    },
    {
        id: 14,
        name: "React Miler",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 130,
        is_in_inventory: false,
        items_left: 0,
        imageURL: "https://static.Nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
        slug: "react-miler",
    },
    {
        id: 15,
        name: "Wildhorse 6",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 104.95,
        is_in_inventory: true,
        items_left: 7,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1661bfc0-19c6-4fd6-95af-c4ef2d7c9bdb/wildhorse-6-trail-running-shoe-DZXXT7.jpg",
        slug: "wildhorse-6",
    },
    {
        id: 16,
        name: "Air Zoom Terra Kiger 6",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 114.95,
        is_in_inventory: true,
        items_left: 17,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c6e8e0e-3b82-4a38-a470-def09b974b40/air-zoom-terra-kiger-6-trail-running-shoe-dSMbkN.jpg",
        slug: "air-zoom-terra-kiger-6",
    },
    {
        id: 17,
        name: "Zoom Matumbo 3",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 104.95,
        is_in_inventory: true,
        items_left: 15,
        imageURL:"https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ir6irtmcfvdej4sxdcgx/zoom-matumbo-3-distance-spike-lTkZhG.jpg",
        slug: "zoom-matumbo-3",
    },
    {
        id: 18,
        name: "Zoom Pegasus 37 Shield",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 114.95,
        is_in_inventory: false,
        items_left: 0,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fabc5e82-7522-4500-8990-b339d1dff25e/air-zoom-pegasus-37-shield-running-shoe-nf5kSS.jpg",
        slug: "zoom-pegasus-37-shield",
    },
    {
        id: 19,
        name: "Pegasus Trail 2 GORE-TEX",
        brand: "Nike",
        gender: "MEN",
        category:"Running", 
        price: 129.95,
        is_in_inventory: false,
        items_left: 0,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d6539dd8-51cd-4b0d-8db0-5f2cfce5e4d0/pegasus-trail-2-gore-tex-trail-running-shoe-3mPmtm.jpg",
        slug: "pegasus-trail-2-gore-tex",
    },
    {
        id: 20,
        name: "Pegasus Trail 2",
        brand: "Nike",
        gender: "MEN",
        category: "Running",
        price: 114.95,
        is_in_inventory: true,
        items_left: 9,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0445e99a-af29-43d5-a561-5c1f6176fe4c/pegasus-trail-2-trail-running-shoe-fWmzwd.jpg",
        slug: "pegasus-trail-2",
    },
    {
        id: 21,
        name: "Mercurial Vapor 13 Elite Tech Craft FG",
        brand: "Nike",
        gender: "MEN",
        category: "Football",
        price: 145,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.Nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
        slug: "mercurial-vapor-13-elite-tech-craft-fg",
    },
    {
        id: 22,
        name: "Mercurial Superfly 7 Pro MDS FG",
        brand: "Nike",
        gender: "MEN",
        category: "Football",
        price: 137,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.Nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
        slug: "mercurial-superfly-7-pro-mds-fg",
    },
    {
        id: 23,
        name: " Zoom Rival S 9",
        brand: "Nike",
        gender: "MEN",
        category:"Racing", 
        price: 64.95 ,
        is_in_inventory: true,
        items_left: 23,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/x2ebkrjqt7m6yianiyyc/zoom-rival-s-9-racing-spike-Nd0cKZ.jpg",
        slug: "zoom-rival-s-9",
    },
    {
        id: 24,
        name: "Juniper Trail",
        brand: "Nike",
        gender: "MEN",
        category: "Trail", 
        price: 69.95,
        is_in_inventory: true,
        items_left: 11,
        imageURL: "https://static.Nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5a43c084-23ae-404a-a358-8faf1b79f887/juniper-trail-trail-shoe-sRMT3x.jpg",
        slug: "juniper-trail",
    },
]

// Data export
export { InitialState } 