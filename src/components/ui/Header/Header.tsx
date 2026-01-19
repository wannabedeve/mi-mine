import Arrow from '../Arrows/Arrow';
import SectionTitle from '../Heading/SectionTitle'
import './header.scss'

type TextProps = {
    textPage: string;
    textHead: string;
}

export default function Header({ textPage, textHead }: TextProps) {


    return (
        <>
            <div className='head-body'>
                <div className='relative'>
                    <header className='head-header'>
                        <div>
                            <h1 className='head-h1'>
                                <SectionTitle title={`${textPage}`} />
                            </h1>
                            <span className="title-large">{textHead}</span>
                        </div>
                    </header>

                </div>
                <div className='ml-[50%]'>
                    <br /><br />
                    <Arrow />
                </div>

            </div>

        </>
    )
}