import { useParams } from 'react-router-dom';

const Edit = () => {
    const param = useParams();

    return (
        <div>
            {param.id}번 일기 수정페이지입니다.
        </div>
    )
}

export default Edit;