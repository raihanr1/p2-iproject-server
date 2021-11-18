"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Properties",
      [
        {
          name: "HUMBLE HOUSE",
          describe:
            "Humble House is a response to Clients’ need for a humble and joyful house. As downsizers, our clients wanted a simple house that is user-friendly and low- maintenance but at the same time smart and elegant which can house the two of them and also open out to entertain guests and family.  The house is predominantly single storey, positioned on the highest part of a steeply sloping site. Located in close proximity to Wilson Botanical Gardens, the site offers unique advantage of views towards town and also tall stand of trees in botanical gardens.",
          price: 200000000,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/5.jpg",
          address: "Berwick, VIC",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:13:43.655Z",
          updatedAt: "2021-11-18T02:13:20.738Z",
        },
        {
          name: "DWQDQW",
          describe:
            "Humble House is a response to Clients’ need for a humble and joyful house. As downsizers, our clients wanted a simple house that is user-friendly and low- maintenance but at the same time smart and elegant which can house the two of them and also open out to entertain guests and family.  The house is predominantly single storey, positioned on the highest part of a steeply sloping site. Located in close proximity to Wilson Botanical Gardens, the site offers unique advantage of views towards town and also tall stand of trees in botanical gardens.",
          price: 2131,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/5.jpg",
          address: "DWQWQDWQ",
          status: "Deactive",
          like: null,
          createdAt: "2021-11-17T20:04:08.976Z",
          updatedAt: "2021-11-17T21:39:28.061Z",
        },
        {
          name: "CHAPEL HOUSE",
          describe:
            "Chapel house is a multi-generational house. Our clients wanted a house where they would live with the children and parents would frequently visit from overseas and stay with them for reasonably long periods of time. As such the house design was expected to be flexible and cater to the age and cultural needs of its occupants.",
          price: 120000000,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/R-Architecture_Chapel_%C2%A9Tatjana-Plitt039.jpg",
          address: "Glen Waverley, VIC",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:16:17.669Z",
          updatedAt: "2021-11-18T02:13:29.441Z",
        },
        {
          name: "PARKDALE HOUSE",
          describe:
            "Parkdale house is a celebration of large existing gum trees on site. The tall, sturdy trees, the smooth and rustic texture of their bark- forms inspiration for the design of this house.  The owners wanted a new family home that is flexible to cater to the future changes in family requirements- a joyful abode at all stages in life. Whilst the trees presented challenges to work with, they also presented great opportunities for the house to be laid out around the trees and benefit from the peculiar character that the trees contributed to this home site. Other challenges presented by this site was the steep slope of the site and a restrictive covenant related to building height that had to be taken into consideration whilst delivering a meaningful design outcome- that did not feel like a compromise.",
          price: 135000000,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/23-Parkdale-001-1.jpg",
          address: "Balwyn, VIC",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:18:38.996Z",
          updatedAt: "2021-11-17T20:24:12.590Z",
        },
        {
          name: "WEE",
          describe: "SAS",
          price: 13,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/5.jpg",
          address: "SSA",
          status: "Deactive",
          like: null,
          createdAt: "2021-11-17T20:57:08.618Z",
          updatedAt: "2021-11-17T21:39:33.471Z",
        },
        {
          name: "HINKLER HOUSE",
          describe:
            "Hinkler House is an appropriate and unique response to the steep site slope; magnificent mountain views and clients’ brief of creating an entertainer’s paradise whilst being a cosy residence. Hinkler House looked to achieve a residence that provided flexibility for the client while taking full advantage of the context and orientation. A key requirement was to achieve a house that could comfortably entertain a large group of people at any time of the year, whilst at the same time feel comfortable to live in.",
          price: 150000000,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/08/R-Architecture_Hinkler-House_Front-1536x1024.jpg",
          address: "Glen Waverley, VIC",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:15:10.705Z",
          updatedAt: "2021-11-17T20:24:09.006Z",
        },
        {
          name: "Kayden Property",
          describe:
            "One of the hottest destinations in Costa Blanca, luxury homes situated in Campoamor, located near to the coast, golf course, and shopping center.",
          price: 2000000000,
          image_url:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
          address: "Guardamar del Segura, Spain",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:09:37.903Z",
          updatedAt: "2021-11-17T20:24:15.910Z",
        },
        {
          name: "ROBINSON HOUSE",
          describe:
            "Robinson House is a large home for a future family. The client wanted a home that would be large enough for a future family while not being excessive is size like other homes in the area. The aim was to design a home that felt grand without filling the whole block. Our client didn’t want a house that required hours to maintain whilst being still achieving all the amenities of large dwellings in the neighbourhood for future buyers.",
          price: 130000000,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/BE_rear_22.jpg",
          address: "Brighton East, VIC",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:17:20.834Z",
          updatedAt: "2021-11-17T20:56:45.159Z",
        },
        {
          name: "COURTYARD HOUSE",
          describe:
            "Courtyard house is three-storey multi-generational house. Our clients wanted a house where they would live with the children while providing a self-sufficient apartment on the top level for older parents. Multiple large living spaces and lift provide flexibility and functionality for occupants to come together or recluse for some personal space.",
          price: 13000000,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/08/2-5-1536x799.jpg",
          address: "Mulgrave, VIC",
          status: "Active",
          like: null,
          createdAt: "2021-11-17T19:25:06.038Z",
          updatedAt: "2021-11-17T20:26:16.347Z",
        },
        {
          name: "TEST",
          describe: "DWQWQ",
          price: 2112,
          image_url:
            "https://rarchitecture.com.au/wp-content/uploads/2021/07/5.jpg",
          address: "DWQDQD",
          status: "Deactive",
          like: null,
          createdAt: "2021-11-17T20:02:29.745Z",
          updatedAt: "2021-11-17T20:56:55.588Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Properties", null, {});
  },
};
