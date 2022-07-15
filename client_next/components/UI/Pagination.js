
function Pagination({ data }) {
   const { total, limit, page, hanldeChange } = data;
   const count =  Math.ceil(Number(total) / limit);
   let buttons = [];
   for (let i = 1; i <= count; i++) {
      buttons.push(
         <button className={`item ${page == i ? 'active' : ''}`} key={i}
            onClick={() => hanldeChange('page', i)}>{i}</button>
      )
   }

   return (
      <div className="pagination">
         <button className={`item prev ${page === 1 ? 'disabled' : ''}`}
               disabled={page === 1}
               onClick={() => hanldeChange('page', page - 1)}></button>
         { buttons }
         <button className={`item next ${count === page ? 'disabled' : ''}`}
               disabled={count === page }
               onClick={() => hanldeChange('page', page + 1)}></button>
      </div>
   );
}

export default Pagination;