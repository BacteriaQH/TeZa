import React, { useEffect, useRef, useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import useDebounce from '../../hooks/useDebounce';
import axiosInstance from '../../helpers/axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from './AccountItem/index';
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounceed = useDebounce(searchValue, 800);
    useEffect(() => {
        if (!debounceed.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await axiosInstance.get(`/api/search`, {
                params: {
                    name: debounceed
                }
            })

            setSearchResult(result.data.user);

            setLoading(false);
        };
        fetchApi();
    }, [debounceed]);
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    {searchResult.map((result) => (
                        <AccountItem data={result} key={result._id} />
                    ))}
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div style={{ height: '30%', backgroundColor: '#f0f2f5', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }} className='my-4'>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts"
                    spellCheck="false"
                    onChange={(e) => {
                        if (searchValue.length === 0 && e.target.value.trim() === '') {
                            return;
                        }
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => setShowResult(true)}
                    className="m-5"
                    style={{
                        backgroundColor: '#f0f2f5'
                    }}
                />
                {loading && <FontAwesomeIcon icon={faSpinner} />}
            </div>
        </HeadlessTippy>
    )
}

export default Search