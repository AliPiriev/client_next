import { connect } from 'react-redux';
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

function TopicBox({ tags }) {
   return (
      <motion.div className="topics-box"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: 20, opacity: 0, pointerEvents: 'none' }}>
         <div className="list">
            {tags && tags.data ? (
               tags.data.map((tag) => {
                  return (
                     <Link to={`articles/?tag=${tag.id}`} className="tag-item" key={tag.id}>
                        {tag.name}
                     </Link>
                  )
               })
            ) : ''}
         </div>
         <div className="bottom">
            <Link to='articles' className="see-all-btn">
               <span>See All</span>
               <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.282213 1.55412L4.22809 5.5L0.282212 9.44588L1.33633 10.5L5.28221 6.55412C5.56173 6.27452 5.71875 5.89535 5.71875 5.5C5.71875 5.10465 5.56173 4.72548 5.28221 4.44588L1.33633 0.5L0.282213 1.55412Z" fill="white"></path> </svg>
            </Link>
         </div>
      </motion.div>
   )
}

const mapStateToProps = (state) => {
   return {
      tags: state.commonDataState.tags
   }
}

export default connect(mapStateToProps)(TopicBox);