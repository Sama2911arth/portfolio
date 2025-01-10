import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center space-y-4 ">
        <img src={icon} alt={`${title} icon`} className="w-25 h-40" />
        <h3 className="text-lg font-semibold text-[#2B95ED]
]">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const features = [
        {
            title: 'Created by IIT-IIM Alumni',
            description: 'We’ve learnt from the best and strive to bring you the best.',
            icon: 'https://s3-alpha-sig.figma.com/img/eea3/38e9/92fc48dd775a5e49c69d9df9585a1abb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtQ9HnAxY4jUkLS8y7fq1OySx35NTo7QO9NnaIkGnnCIN4GfGoXT9yEKFEo3jRa8-dbHH97qpMWT0tYP1pKi8ZTGAuY0tX1no~FsoNH~W1Zp6Z71dCai6Ad-fgESWe6zACjrhJzY3PIfXsSWGTZkFKbW83wIeyIre2vI~ulefzgQ7-KAczATSZKq~m6fNzUmGt~nApR9ULS~gnyCJCoHpJx9ntnkA15MNGCZ~ci6FFqz1JiYl~hw1CvFhNS90Ibqvx6MvFGva1bqTXCq3vHCue-mYq-ilg06ROb72~z4C3qQIE~e9cL2RRyA37bDFIMibuUUvAyrm6~KnNfXXI~F8A__', // Replace with actual paths to your icons
        },
        {
            title: 'A.I. Integration',
            description: 'We have harnessed the power of A.I. to enhance and assess your knowledge.',
            icon: 'https://s3-alpha-sig.figma.com/img/4870/3435/fa2691a9b7e790bd627b69d28a6429f7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XuJmAxMF47scCQ38HFD121pwGH1~xU71Ne1s7IjF6SszXI-5wbnhcjL2dR027~Bk8wYl219qqnrJqWCGsnUBKGhnE8jhBGMJSL93u2kHDPMATxhlfbqfSLYAV1CgYWG7fLx60dF7nV30LBaP~wEkPpLDjZjIapEUORIHLIE4qTAX77erjSoY8u45Xjpc4mbDOLQhvb7d21SVb32ka~mFZUBd0OxgVdz9eERrzJsHQa9MlcW4XZx4tiDsEGC5Gg09IbueynHDXCJ1F7ZqIlcGzjmweFHeRaBR7BJGgnq5sRJDKEAkf-051eEjBiQH-Y9kNIjNd7BPzQSZ65BCO4lDdg__',
        },
        {
            title: 'In-app Coding',
            description: 'The app features in-app coding, eliminating the need for laptops.',
            icon: 'https://s3-alpha-sig.figma.com/img/2b4f/e0c0/39130d10b6cd8848224495f06e826e35?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUKaY5iMvVKJnxI72C5C0IrJZ-A~u4ZKMHFOMKDbmmrU96Zs1CQkL6KrYlWBf7~ivP3ogvDkxf~m8l0DDYf6dGxfjxMEgZkh~C3EujrjEm9jY7NBzBHLxVdruECAQ0BRdLt01XWyvJOyuZ5-aEGXF3iF83qMsjvgOPCHGvkISkWCK8dvNGCfyvcs8v~gke8wihdbcXL5HpWihq78gn1qjz4XQ1mtgX2dF02j3n62MfdwXMXzHQ9K7ndpksn7RaookSCJsWWYNB5RMFgYAF0GD5jEA32LjAJ-jMljJgQZcZA60y1yn38kZ~OhJMUxYvFzbO3aOoM66AMDaDr~kt3msw__',
        },
        {
            title: 'Extensive E-books',
            description: 'Deepen your understanding and mastery of the skills.',
            icon: 'https://s3-alpha-sig.figma.com/img/be98/a486/9b8c23dfc8f0e3101076c9ba4ddaf793?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neSSHoqQZbYJbSObZB2ubkXdhZQIRkh4lk27nMeRjX01-FxKQYFT~UA7YmDLIxnXw1FhlW0w0vVrxHWvS6alE8pHptI911Y33RjoftsyKXlVeh63kJ3FW~JmNHaeJuN5nsPWc9uC8EINOr6XQMDp1pQ1ryN17r-NEHL2ABnyluvh4X713Ggjwt4ZaVPmWarEtneZTk1THUGvM~m7Pgst1qGjQSxcB4TwKzm4AMJLvnSSzsaQfOTEDaipJ4zL~gdr1tKJkwLVVZBC3lPoNZpTFdkbTzyNAFGuOEKK8tb9g-Viy7DV~aRGZrpQQmnGHEUURZdCVCh8yKRL0iUUlk15Aw__',
        },
        {
            title: 'Recorded Lectures',
            description: 'Access lectures anywhere and anytime at your own pace.',
            icon: 'https://s3-alpha-sig.figma.com/img/3030/5f0d/8173eab36b43c71b03e4ac4e9b711ad3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~crn-cdS-V0C1fxz2HOsBJVVHg7tdBsVV2kKykamErWdeIKgenfXHFZRrERRunYlJYmF8Nj~zi1ZWR85lnpDANkeMW7lF73UIx~QjN6RVfvlPMAXltrzmfuOP-tZpSPkmMl7L-FbwZLlJLO1zPeyni5CsvbddkuQjCmta4b3BjNWKO9HtDzqJWQJecYh9rd-BbGp1HJq1h2uNE1TV2TyUD07zAppoWgp~oSD7R06U6PA9t1oHmdkhsS9AvMhJS92wLjclynaFg0Fb1Xipt-CgGAHxpUvaux5bXVGdvtv7~IMePmvEp6IQePhR5Fhg0TbYXZeTFSX3STygGptF~Zyg__',
        },
        {
            title: 'Flash Cards',
            description: 'Make learning convenient and fun using flash cards.',
            icon: 'https://s3-alpha-sig.figma.com/img/f95b/9dad/0e9d75812f5b35c3390b920b02b91f9a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ls2Uoe9KT68m7t7Eiv5a4aTN~d8KOPcGaT6C~to~R59qFQ9WuQ97uO-kaLPlBpFgvIcIhrSK3RPaf8mA5yt1IjnWqDjRbmczo2nu03b5SIvIOgofb4xZ064NahUnwUauk7Obbwa8Q8wab5L9j~Op~r7GEx7pSg7Sw8-bCnFf2VltfADX6kFGzVegrt6UUVpmEhD4~nUWdsQcmW3dcPotSGOv-JJ3FanlFyfYO0Ae5pIMfdRepC4Xo0SVejJsRy9p8xNMQt6G-hRTxWUpunMPfe06ykd3N~Fjd1xMHH1f9EhfgbmOnh8aQCcmxBwXR-nzkGHv4XQl7Z9eHej4tvtYcA__',
        },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-[#2B95ED] to-[#185587] text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-[50px] font-Poppins font-bold text-center text-white-500 mb-8 flex items-left">What Sets Us Apart ?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
