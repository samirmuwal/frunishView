export let navList = [
  {
    id: 1,
    navName: "user Management",
    icon: (
      <svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

  
  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path>

</svg>
    ),
    subMenu: [
      {
        navName: "Admin",
        link: "/furniture/admin-panel/admin",
      },
      {
        navName: "Users",
        link: "/furniture/admin-panel/users",
      },
    ],
  },
  
    {
      id:2,
      navName: "Locations",
      icon: (
        <svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
      </svg>),
      subMenu: [
        {
          navName: "Countries",
          link: "/furniture/admin-panel/countries",
        },
  
      ],
  
   
  },
  {
    id: 3,
    navName: "master catalog",
    icon:(<svg class="w-[25px] h-[25px] fill-[#8e8e8e] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/>
    </svg>
    ),

    subMenu:[
      {
        navName:"Sliders",
        link:"/furniture/admin-panel/sliders"

      },
      {
        navName:"testimonials",
        link:"/furniture/admin-panel/testimonials"

      },
      {
        navName:"why choose us",
        link:"/furnitureadmin-panel/why-choose-us"

      },
      {
        navName:"coupons",
        link:"furniture/admin-panel/cupons"

      },
    ]

  },

  {
    id:4,
    navName:"product catalog",
    icon:(<svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"></path>
   
    </svg>),

    subMenu:[
    
      {
        navName:"Categories",
        link:"furniture/admin-panel/categories"
      },
      {
        navName:"Materials",
        link:"/furniture/admin-panel/materials"
      },
      {
        navName:"Color",
        link:"/furniture/admin-panel/color"
      },
      {
        navName:"Products",
        link:"/furniture/admin-panel/products"
      },

    ]
  
  },

  {
    id:5,
    navName:"Enquirys",
    icon:(<svg class="w-[25px] h-[25px] fill-[#8e8e8e] text-[#8e8e8e]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.8" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
    </svg>
    ),
    subMenu: [
      {
        navName: " Contact Enquiry ",
        link: "/furniture/admin-panel/contact-enquiry",
      },
      {
        navName: "News letters",
        link: "/furniture/admin-panel/news-letters",
      },
    ],

  },
  {

    id:6,
    navName:"configuration",
    icon:(<svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

     
      <path d="M112 112c0 35.3-28.7 64-64 64V336c35.3 0 64 28.7 64 64H464c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64H112zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24 24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V208c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16z"></path>
    
    </svg>),
    subMenu: [
      {
        navName: "payment gateways",
        link: "/furniture/admin-panel/payment-gateways",
      },
      {
        navName: "configurations",
        link: "/furniture/admin-panel/configurations",
      },
    ],
  },
      {
      
        id:7,
        navName:"faqs",
        icon:(<svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"></path>
        
        </svg>),


        subMenu: [
          {
            navName: "faq",
            link: "/admin-panel/faqs",
          },
          
        ]

      },
      {
        id:8,
        navName:"cms pages",

        icon:(<svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
        </svg>),

      subMenu: [
  {
    navName: "cms pages",
    link: "/admin-panel/cms-pages",
  },
  
]






      }


];
