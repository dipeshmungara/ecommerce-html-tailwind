import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CompanyLogo from '../images/images.png'

const navigation = [
  { name: 'Mitra BeliBeli', href: '#', current: false },
  { name: 'About BeliBeli', href: '#', current: false },
  { name: 'BeliBeli Care', href: '#', current: false },
  { name: 'Promo', href: '#', current: false },
]





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className='lg:border-b-2 lg:border-slate-500/10'>
            <div className="mx-auto flex max-w-[1440px] items-center justify-start bg-whit">
              <div className="relative w-full flex h-12 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-dark-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1  sm:items-stretch sm:justify-start hidden md:block lg:block ">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="mailto:abc@gmail.com">
                      abc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-x-20 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-500 ',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute  right-0 flex items-center justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href="#" className='text-gray-900  items-center pl-4  text-sm font-medium lg:ml-4  border-l border-slate-900/20 '>Sign Up</a>
                  <a href="#" className='text-gray-900  items-center pl-4  text-sm font-medium lg:ml-4  border-l border-slate-900/20 '>Login</a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" bg-black space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>


          <div className='lg:border-b-2 w-full lg:border-slate-500/10 py-2'>
            <div className='lg:mx-auto flex w-full  items-center justify-start'>
              <div className='sm:block  relative w-full max-w-[1440px] mx-auto md:flex lg:flex items-center justify-between'>
                <div className='sm:w-full hidden md:block lg:flex w-[400px]  lg:block'>
                  <a href="#">
                    <img className='w-auto h-10 lg:w-15' src={CompanyLogo} alt="CompanyLogo" />
                  </a>
                </div>
                <div className='flex w-full lg:ml-10 rounded-md bg-white px-3 lg:text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex lg:h-10 lg:py-2  w-[150px] justify-centers lg:text-sm font-semibold text-gray-900 lg:mr-5 lg:border-r lg:border-slate-900/30">
                        All Category
                        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className=" absolute right-0 z-10 mt-2  lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                abc
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                abc
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                abc
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className=' w-full flex'>
                    <div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 pt-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                      </button>
                    </div>
                    <div className='sm:w-full sm:max-[400px] lg:w-full lg:max-w[700px]'>
                      <input
                        className='sm:h-8.5 px-2 lg:h-9 mt-0.5 w-full focus:outline-none border-0    ml-1 placeholder-gray-400 text-gray-900'
                        type="text"
                        placeholder='Search'
                      // value={query}
                      // onChange={search}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className='sm:mt-5 md:flex md:mt-0 lg:justify-end lg:ml-8 lg:mt-0 lg:flex'>
                    <BellIcon className=" inline-flex h-6 w-6 text-gray-500 mx-5" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-flex w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>





          
        </>
      )}
    </Disclosure>
  )
}
