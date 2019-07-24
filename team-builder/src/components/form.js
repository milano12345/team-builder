import React from 'react';

function Form() {
    const [member,setMember] = useState({name: '', email: '', role: ''})

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
        console.log(user.name);
        console.log(user.password);
      };
    
      return (
        <div className="Form">
          {console.log(user)}
          <form onSubmit={event => handleSubmit(event)}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={event => handleChange(event)}
              />
            </label>
            <label>
              Password:
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={event => handleChange(event)}
              />
            </label>
            <button>Submit!</button>
          </form>
        </div>
      );
    }

export default Form;    