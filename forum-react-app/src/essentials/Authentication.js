  export const authenticateUser = async (userData) => {
      const obj = {
          username: userData.firstName + " " + userData.lastName
      }

      const postParameter = new URLSearchParams(obj);

      try {
          const response = await fetch('http://hyeumine.com/forumLogin.php', {
            method: "POST",
            body: postParameter
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
      
          const data = await response.json();
          // return {...userData, id: data.user.id};
          return data;
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
      }
      
  };

export const createUser = async (userData) => {
    const obj = {
        username: userData.firstName + ' ' + userData.lastName
    }

    const postParameter = new URLSearchParams(obj);

    try {
        const response = await fetch('http://hyeumine.com/forumCreateUser.php', {
          method: "POST",
          body: postParameter
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
    
        const data = await response.json();
        console.log(data);
        console.log(obj);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    
};