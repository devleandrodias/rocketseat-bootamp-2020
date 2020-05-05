import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';

interface RepositoryParams {
  repository: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2006-kabini-otter.jpg/220px-2006-kabini-otter.jpg"
            alt=""
          />
          <div>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>42423</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>jhvkjvh</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>jhvkjhv</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdf">
          <div className="">
            <strong>fjhsd</strong>
            <p>dknbgk,dfbg</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Dashboard;
