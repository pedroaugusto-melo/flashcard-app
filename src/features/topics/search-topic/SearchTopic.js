import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, setSearch } from './searchTopicSlice';
import './SearchTopic.css';


export default function SearchTopic() {
    const dispatch = useDispatch();
    const searchValue = useSelector(selectSearch);
    

    const handleInputChange = ({ target }) => {
        dispatch(setSearch(target.value));
    }

    return (
        <div className="SearchTopic">
            <input 
                type="text" 
                placeholder='Search a topic here'
                value={searchValue}  
                onChange={handleInputChange}/>
        </div>
    );
}