import React from 'react';
import ReactDOM from 'react-dom';

export default class CV extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                width: 740,
                margin: '0 auto',
                padding: 20,
                border: 'solid 1px #d4d4d4',
                borderRadius: 4
            }}>
                {/* Header */}
                <div className='text-align-center' style={{
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>Li (Kelly) Kang</div>
                <div className='text-align-center'>2317 Speedway, GDC 7.416b, Austin, TX 78712</div>
                <div className='text-align-center'>(765)421-5556 likang@utexas.edu</div>
                {/* Education */}
                <SectionTitle title='EDUCATION' />
                <SubSectionTitle title='PhD in Statistics and Data Science' date='May 2020' />
                <div>University of Texas at Austin</div>
                <SimpleDescription text='Thesis: Bayesian parametric modeling of Skewness and Kurtosis' />
                <SimpleDescription text='Committee: Stephen Walker, Paul Damien, Mingyuan Zhou' />
                <SubSectionTitle title='BS in Actuarial Science, Mathematics, Applied Statistics' date='May 2015' />
                <div>Purdue University, West Lafayette, IN</div>
                <SimpleDescription text='Graduated with Distinction' />
                {/* Teaching & Advising */}
                <SectionTitle title='TEACHING & ADVISING' />
                <SubSectionTitle title='Assistant Instructor, Introduction to statistics in healthcare' date='Aug 2017-Dec 2017' />
                <div>Department of Statistics and Data Science, UT Austin</div>
                <BulletPoints points={[
                    'Led lecture sessions twice per week (100+ students in pharmacy, biology, liberal arts, etc.)',
                    'Designed course materials including lecture notes, study problems and exams',
                    'Measured students’ study performance through in-class activities'
                ]} />
                <SubSectionTitle title='Teaching Assistant' date='Aug 2015 – present' />
                <div>Department of Statistics and Data Science, UT Austin</div>
                <BulletPoints points={[
                    'Taught lab sessions for R and Microsoft Excel',
                    'Held weekly office hours to answer students’ questions',
                    'Graded course assessments to ensure students understood material and stayed on track'
                ]} />
                {/* RESEARCH EXPERIENCE */}
                <SectionTitle title='RESEARCH EXPERIENCE' />
                <SubSectionTitle title='A new class of unimodal, asymmetric, heavy-tailed densities' date='Jul 2017 - Jun 2018' />
                <BulletPoints points={[
                    'Constructed a new class of densities to better capture the skewness and heavy tails that commonly exhibits in financial datasets (Time series modeling)',
                    'Performed linear regression, dynamic linear model, and GARCH model on S&P 500 Index data',
                    'Performed simulation analysis using the techniques of Subsampling'
                ]} />
                <SubSectionTitle title='Multivariate generalization on Gamma mixture of Uniforms' date='May 2018 – Present' />
                <BulletPoints points={[
                    'Used Copulas to capture the dependence of multi-dimensional skewed and heavy tailed data',
                    'Performed Bayesian MCMC sampling methods to estimate the parameters with uncertainty included'
                ]} />
                <SubSectionTitle title='Bayesian skew mixture models for loss distribution' date='May 2018 – Present' />
                <BulletPoints points={[
                    'Proposed a finite skew mixture model that provides a better characterization of insurance data, and could be easily generalized to other datasets',
                    'Developed a Hierarchical structure to make the statistics model easier to understand',
                    'Performed Bayesian MCMC sampling methods in R to better predict future losses'
                ]} />
                {/* HONORS AND AWARDS */}
                <SectionTitle title='HONORS AND AWARDS' />
                <SubSectionTitle title='SBSS Student Paper Competition winner' date='2019' noBold={true} />

                <SubSectionTitle title='McCombs School of Business Fellowship for Research Excellence' date='2017 - 2018' noBold={true} />
                <SimpleDescription text='University of Texas at Austin' />

                <SubSectionTitle title='Outstanding Junior in College of Science' date='2014' noBold={true} />
                <SimpleDescription text='Purdue University, West Lafayette, IN' />

                <SubSectionTitle title='Dean’s List and Semester Honors' date='2011 - 2015' noBold={true} />
                <SimpleDescription text='Purdue University, West Lafayette, IN' />
                {/* REFERENCES */}
                <SectionTitle title='REFERENCES' />
                <SubSectionTitle title='Stephen Walker, Professor and Graduate Advisor' />
                <SimpleDescription text='Department of Statistics and Data Sciences (SDS)' />
                <SimpleDescription text='Department of Mathematics' />
                <SimpleDescription text='University of Texas at Austin' />
                <SimpleDescription text='Email: s.g.walker@math.utexas.edu' />

                <SubSectionTitle title='Paul Damien, Professor' />
                <SimpleDescription text='Department of Information, Risk, and Operations Management' />
                <SimpleDescription text='Department of Finance' />
                <SimpleDescription text='University of Texas at Austin' />
                <SimpleDescription text='Email: paul.damien@mccombs.utexas.edu' />

                <SubSectionTitle title='Mingyuan Zhou, Assistant Professor' />
                <SimpleDescription text='Department of Information, Risk, and Operations Management (IROM)' />
                <SimpleDescription text='University of Texas at Austin' />
                <SimpleDescription text='Email: Mingyuan.Zhou@mccombs.utexas.edu' />
            </div>
        );
    }
}

function SectionTitle(props) {
    const sectionTitleStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: 20,
        color: 'rgb(191, 87, 0)'
    };
    const { title = '' } = props;

    return <div style={sectionTitleStyle}>{title}</div>;
}

function SubSectionTitle(props) {
    const { title = '', date = '', noBold } = props;
    const subSectionTitleStyle = { fontSize: '16px', marginTop: 5, fontWeight: noBold ? 'normal' : 'bold' };
    const subSectionTitleLeftStyle = { fontStyle: 'italic', width: 'calc(100% - 170px)' };
    const subSectionTitleRightStyle = { width: 170 };

    return (
        <div style={subSectionTitleStyle}>
            <div className='inline-top' style={subSectionTitleLeftStyle}>{title}</div>
            <div className='inline-top text-align-right' style={subSectionTitleRightStyle}>{date}</div>
        </div>
    );
}

function BulletPoints(props) {
    return (
        <ul style={{ paddingLeft: 50 }}>
            {
                props.points.map((point, i) => <li key={i}>{point}</li>)
            }
        </ul>
    );
}

function SimpleDescription(props) {
    const { text = '' } = props;

    return (
        <div style={{ paddingLeft: 50 }}>{text}</div>
    );
}
