import axios from "axios";

// Export an object with a "search" method that searches the User API for the passed query
export default {
  search: function(query) {
    return axios.get("https://randomuser.me/api/?results=100&nat=us" + query);
  }
};