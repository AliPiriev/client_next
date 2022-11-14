
const INITIAL_STATE = {
   filterData: [
      {
         id: 0,
         img: 'img/marketplace/test.jpeg',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: 'Free',
         level: 'Pro',
         lang: 'Eng',
         language: 'English',
         time: '8 Min'
      },
      {
         id: 1,
         img: 'img/marketplace/product.png',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: '18$',
         level: 'Begginer',
         lang: 'Eng',
         language: 'Russian',
         time: '8 Min'
      },
      {
         id: 2,
         img: 'img/marketplace/product.png',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: '999$',
         level: 'Advance',
         lang: 'Eng',
         language: 'Deutsch',
         time: '8 Min'
      },
      {
         id: 3,
         img: 'img/marketplace/product.png',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: 'Free',
         level: 'Advance',
         lang: 'Eng',
         language: 'Deutsch',
         time: '8 Min'
      },
      {
         id: 4,
         img: 'img/marketplace/product.png',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: 'Free',
         level: 'Pro',
         lang: 'Eng',
         language: 'English',
         time: '8 Min'
      },
      {
         id: 5,
         img: 'img/marketplace/product.png',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: '18.4$',
         level: 'Begginer',
         lang: 'Eng',
         language: 'Pakistanian',
         time: '8 Min'
      },
      {
         id: 6,
         img: 'img/marketplace/product.png',
         title: 'HTML, CSS, and Javascript for Web Developers',
         price: '20$',
         level: 'Pro',
         lang: 'Eng',
         language: 'Russian',
         time: '8 Min'
      }
   ],
   filterArr: [
      {
         id: 0,
         title: 'Level',
         items: [
            {
               id: 10,
               title: 'Begginer',
               amount: '(794)'
            },
            {
               id: 11,
               title: 'Advance',
               amount: '(203)'
            },
            {
               id: 12,
               title: 'Pro',
               amount: '(80)'
            }
         ]
      },
      {
         id: 2,
         title: 'Course Type',
         items: [
            {
               id: 13,
               title: 'Paid',
               amount: '(1494)'
            },
            {
               id: 14,
               title: 'Free',
               amount: '(998)'
            }
         ]
      },
      {
         id: 3,
         title: 'Course Language',
         items: [
            {
               id: 15,
               title: 'English',
               amount: '(4694)'
            },
            {
               id: 16,
               title: 'Deutsch',
               amount: '(300)'
            },
            {
               id: 17,
               title: 'Russian',
               amount: '(90)'
            },
            {
               id: 18,
               title: 'Pakistanian',
               amount: '(1)'
            }
         ]
      }
  ]
};

function utilsReducer(state = INITIAL_STATE, action){

   if(action.type === 'FILTER'){
      return {
         ...state,
         filter: action.filtered
      }
   }

   return state;
}

export default utilsReducer;