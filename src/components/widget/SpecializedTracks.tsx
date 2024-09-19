import Wrapper from '@/components/shared/Wrapper'
import SpecializedTracksContent from '../shared/SpecializedTracksContent'



function SpecializedTracks() {

    

    return (
        <section>
            {/* Header */}
            <Wrapper>
                <div className="max-w-screen-xl relative">
                    <div className='flex md:flex-row flex-col md:space-x-3'>

                        <h2 className="text-6xl bg-gradient-to-r from-[#8a34d1] via-[#634ccd] to-[#d46a8e] bg-clip-text text-transparent  font-extrabold   max-w-xl">Specialized
                        </h2>
                        <h2 className='text-6xl text-gray-900  font-extrabold   max-w-xl'>Tracks</h2>
                    </div>
                    <p className=" mt-6 text-lg text-slate-600 font-medium max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each</p>

                </div>
                {/* Left Content */}
                <SpecializedTracksContent/>

            </Wrapper>
           
        </section>
    )
}

export default SpecializedTracks
