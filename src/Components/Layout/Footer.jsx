function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer p-8 bg-gray-600 text-primary-content footer-center">
     <p>Copyright &copy; {currentYear} All rights reserved</p>
    </footer>
  )
}

export default Footer
