export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Marjoha",
      img: "https://images.pexels.com/photos/8123643/pexels-photo-8123643.jpeg?cs=srgb&dl=pexels-serkan-bayraktar-8123643.jpg&fm=jpg",
      status: "active",
      email: "1snow@gmail.com",
      age: 25,
    },
    {
      id: 2,
      username: "Gomez",
      img: "https://images.pexels.com/photos/7693210/pexels-photo-7693210.jpeg?cs=srgb&dl=pexels-eyup-beyhan-7693210.jpg&fm=jpg",
      email: "2snow@gmail.com",
      status: "passive",
      age: 24,
    },
    {
      id: 3,
      username: "Bruce Wayne",
      img: "https://images.pexels.com/photos/5866150/pexels-photo-5866150.jpeg?cs=srgb&dl=pexels-gryffyn-m-5866150.jpg&fm=jpg",
      email: "3snow@gmail.com",
      status: "pending",
      age: 54,
    },
    {
      id: 4,
      username: "Toni Toni",
      img: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?cs=srgb&dl=pexels-sinitta-leunen-6652928.jpg&fm=jpg",
      email: "4snow@gmail.com",
      status: "active",
      age: 61,
    },
    {
      id: 5,
      username: "Changi",
      img: "https://images.pexels.com/photos/4693311/pexels-photo-4693311.jpeg?cs=srgb&dl=pexels-alina-schelkanova-4693311.jpg&fm=jpg",
      email: "5snow@gmail.com",
      status: "passive",
      age: 32,
    },
    {
      id: 6,
      username: "SlickRick",
      img: "https://images.pexels.com/photos/7356392/pexels-photo-7356392.jpeg?cs=srgb&dl=pexels-camille-robinson-7356392.jpg&fm=jpg",
      email: "6snow@gmail.com",
      status: "active",
      age: 18,
    },
    {
      id: 7,
      username: "Angel",
      img: "https://images.pexels.com/photos/4857721/pexels-photo-4857721.jpeg?cs=srgb&dl=pexels-rachel-claire-4857721.jpg&fm=jpg",
      email: "7snow@gmail.com",
      status: "passive",
      age: 34,
    },
    {
      id: 8,
      username: "Francine",
      img: "https://images.pexels.com/photos/7537863/pexels-photo-7537863.jpeg?cs=srgb&dl=pexels-dmitriy-ganin-7537863.jpg&fm=jpg",
      email: "8snow@gmail.com",
      status: "active",
      age: 63,
    },
    {
      id: 9,
      username: "Raymund",
      img: "https://images.pexels.com/photos/7537877/pexels-photo-7537877.jpeg?cs=srgb&dl=pexels-dmitriy-ganin-7537877.jpg&fm=jpg",
      email: "snow@gmail.com",
      status: "pending",
      age: 56,
    },
    {
      id: 10,
      username: "Christelle",
      img: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-7646458.jpg&fm=jpg",
      email: "snow@gmail.com",
      status: "active",
      age: 15,
    },
  ];