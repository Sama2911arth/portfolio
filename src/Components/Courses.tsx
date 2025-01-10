import React from 'react';

interface ProgramCardProps {
    title: string;
    audience: string;
    modules: string;
    instructors: string;
    description: string;
    imageUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, audience, modules, instructors, description, imageUrl }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row items-center sm:items-start p-4 space-y-4 sm:space-y-0 sm:space-x-4 w-[1015px] h-[368.14px] flex items-center">
        <img src={imageUrl} alt={`${title} image`} className="w-[450px] h-[340.14px] sm:w-1/3 rounded-lg " />
        <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">{title}</h3>
            <p className="text-gray-600 text-sm flex items-center">{audience} | {modules} | {instructors}</p>
            <p className="text-gray-700 mt-10 flex items-center">{description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-600">
                <span>Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    </div>
);

const Courses: React.FC = () => {
    const programs = [
        {
            title: 'Check My Resume',
            audience: '',
            modules: '',
            instructors: '',
            description: ' ',
            imageUrl: 'https://s3-alpha-sig.figma.com/img/3d80/85ca/8d9b9cc9219fc17dfbac7fdcd76afd24?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oj1oyvzp-37NjQWoGAuOvoWKABP3Zb7hzYXiUWvH3PAGEzmmKA6YWaoGuDGJQLZAHAvM4WDo2qBvXpUppdueG3CZrQMG0gqQQofe5dWtvSGwp~UPDjbBZ0sbRvxaxdl4Ph6Cq6-VFcceXa6THMpyJhNkA04y73BwQSURluY3ch8-QM1euAd696H2T68Vd8571~FJzdvn5xZU~Cc1pvhofuG3ykd6zB5zL~pUwlgr7lRpb6x2prVB8USScYQ775vMs12h1XuaZotzY3XkEtJKyL23JRYUvWqtKGmV3wBwnR36ySKkYW7lhwcR2Xefvg38dBj6HjbCGJuOPLXqT2D9Qg__', // Replace with actual paths to images
        },

    ];

    return (
        <section className="py-12 bg-gray-50 relative">
            <div
                className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-no-repeat opacity-50"
                style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/4d7b/ec3a/8c4581593dae08d1de8d16b36928bcf7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpOxAxLh8NTK3jlrF7s2SG776RgtZNGaa32-Fk1MomjcoiFFpjYkiLY7XZ7LaN9Gw7EIZ73A86-ZZ1rO6pddAJpm8ky8eddUaLwpGoIhR7AaUAuidRYfbiwo0F1MfUHm8vuEqH4qta5cdfjLK4mOy9nxbxZbMOg~cEqsOcIlv-TP8BYEaAtv9NjAmyKhg3RMqspmAxOuhXzQWQPoRDJFOjBk7~8dIsMwPM4dHMuN~kPl79Xbfuj4nCwD2U86FDDTa1eHFXWRAr1vpvJsUVXyej5kQ5XVixNPioV-abNyAOCOTo9a0yyG2fy1sWWptFFO4ckLCJgD3A~6VBPIs98ntQ__)' }}
            ></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    Check Out Our <span className="text-[#008D8F]">Holistic Programs</span> Designed
                </h2>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    To Help You Reach Your <span className="text-[#008D8F]">Goals</span>
                </h2>
                <div className="space-y-6">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={index}
                            title={program.title}
                            audience={program.audience}
                            modules={program.modules}
                            instructors={program.instructors}
                            description={program.description}
                            imageUrl={program.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
