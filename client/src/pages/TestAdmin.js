import { useState } from "react";
import Select from 'react-select'
import AnimatedPage from "../components/animated/AnimatedPage";

function TestAdmin() {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [duration, setDuration] = useState(false);
   const [category, setCategory] = useState('');
   const [dificult, setDificult] = useState('');
   const [tag, setTags] = useState([]);
   const [isPending, setIsPending] = useState(false);
   const created_at = '2022-02-23 23:17:39';
   const updated_at = '2022-03-30 23:25:41';

   const difficulty = [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advance', label: 'Advance' },
      { value: 'pro', label: 'Pro' }
   ];

   const categories = [
      { value: 'security', label: 'Security' },
      { value: 'education', label: 'Intermediate' },
      { value: 'featured', label: 'Featured' },
      { value: 'releases', label: 'Releases' },
      { value: 'trading', label: 'Trading' },
      { value: 'blockchain', label: 'Blockchain' },
      { value: 'essentials', label: 'Essentials' }
   ];

   const tags = [
      { value: 'security', label: 'Security' },
      { value: 'phyton', label: 'Phyton' },
      { value: 'crypto', label: 'Crypto' },
      { value: 'trading', label: 'Trading' },
      { value: 'blockchain', label: 'Blockchain' },
   ];

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, duration, category, dificult, tag, created_at, updated_at };
      setIsPending(true);

      fetch('http://localhost:8000/articles/', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(blog)
      }).then(() => {
         console.log('new articles added');
         setIsPending(false);
      })
   }

   return (
      <AnimatedPage>
         <div className="create">
            <div className="container">
               <h2>Create a new article</h2>
               <form onSubmit={handleSubmit}>

                  <div className="input-list">
                     <div className="input-wrap">
                        <label>article title:</label>
                        <input type="text" value={title} placeholder="title"
                           onChange={(e) => setTitle(e.target.value)}
                           required />
                     </div>

                     <div className="input-wrap">
                        <label>article duration:</label>
                        <input type="text" value={duration}
                           onChange={(e) => setDuration(e.target.value)} />
                     </div>

                     <div className="input-wrap">
                        <label>article body:</label>
                        <textarea required
                           value={body}
                           onChange={(e) => setBody(e.target.value)}></textarea>
                     </div>

                     <div className="input-wrap">
                        <label>article dificult:</label>
                        <Select
                           options={difficulty}
                           placeholder='Select difficulty'
                           className="select"
                           classNamePrefix="select"
                           onChange={(e) => setDificult(e)} />
                     </div>

                     <div className="input-wrap">
                        <label>article category:</label>
                        <Select
                           options={categories}
                           placeholder='Select difficulty'
                           className="select"
                           classNamePrefix="select"
                           onChange={(e) => setCategory(e)} />
                     </div>

                     <div className="input-wrap">
                        <label>article tag:</label>
                        <Select
                           isMulti
                           options={tags}
                           placeholder='Select difficulty'
                           className="select"
                           classNamePrefix="select"
                           onChange={(e) => setTags(e)} />
                     </div>
                  </div>

                  {!isPending && <button>Create article</button>}
                  {isPending && <button disabled>Adding article ...</button>}
               </form>
            </div>
         </div>
      </AnimatedPage>
   )
}

export default TestAdmin;
