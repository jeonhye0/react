export function Toolbar(props : {isLogin:boolean,
    onClickLogin : ()=>void,
    onClickLogout : ()=>void
}){
    const {isLogin, onClickLogin, onClickLogout} = props;
    return (
        <div>
            <span>{isLogin ? 'XXX님 환영합니다' : '회원 전용 페이지'}</span>
            { isLogin ?
                (<button onClick={onClickLogout}>로그아웃 UI </button>)
                :
                (<button onClick={onClickLogin}>로그인 UI </button>)
            }
        </div>
    )
}
