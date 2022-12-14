const appPage = {
  id: {
    title: 'Aplikasi Catatan V2',
    nav: {
      home: 'Beranda',
      archives: 'Arsip'
    },
    msg: {
      confirm: 'Konfirmasi?',
      loading: 'Memuat data...',
      error: 'Terjadi Kesalahan. Coba lagi nanti.'
    },
    add: 'Tambah',
    cancel: 'Batal',
    delete: 'Hapus',
    archive: 'Arsipkan',
    active: 'Aktifkan',
    back: 'Kembali',
    pageNotFound: 'Oops Tidak dapat menemukan Cacatan.'
  },
  en: {
    title: 'Notes App V2',
    nav: {
      home: 'Home',
      archives: 'Archives'
    },
    msg: {
      confirm: 'Confirm?',
      loading: 'Loading...',
      error: 'Error. Try again later.'
    },
    add: 'Add',
    cancel: 'Cancel',
    delete: 'Delete',
    archive: 'Archive',
    active: 'Active',
    back: 'Back',
    pageNotFound: 'Page Not Found'
  }
}

const loginPage = {
  id: {
    header: 'Login untuk memakai Aplikasi...',
    footer: 'Belum punya akun?',
    footerRegisterLink: 'Daftar disini'
  },
  en: {
    header: 'Login to use app.',
    footer: 'Don\'t have an account?',
    footerRegisterLink: 'Register here'
  }
}

const registerPage = {
  id: {
    header: 'Isi form untuk mendaftar akun.',
    footer: 'telah memiliki akun?',
    footerLoginLink: 'Login disini',
    msg: {
      registerSuccess: 'Akun berhasil dibuat. Silahkan login kembali.'
    }
  },
  en: {
    header: 'Fill the form to register account.',
    footer: 'Already have an account?',
    footerLoginLink: 'Login here',
    msg: {
      registerSuccess: 'User created successfully.'
    }
  }
}

const notePage = {
  id: {
    header: 'Catatan Aktif',
    searchPlaceholder: 'Cari judul ...',
    empty: 'Tidak ada catatan.'
  },
  en: {
    header: 'Active Notes',
    searchPlaceholder: 'Search by title ...',
    empty: 'Empty.'
  }
}

const notesNewPage = {
  id: {
    titlePlaceholder: 'Judul',
    bodyPlaceholder: '<b><i><u>Isi Catatan</u></i></b>',
    msgSuccess: 'Cacatan berhasil di tambahkan!'
  },
  en: {
    titlePlaceholder: 'Title',
    bodyPlaceholder: '<b><i><u>Notes Content</u></i></b>',
    msgSuccess: 'Successfully add notes!'
  }
}

const notesIdPage = {
  id: {
    notFound: 'Cacatan tidak di temukan.'
  },
  en: {
    notFound: 'Not Found.'
  }
}

const archivePage = {
  id: {
    header: 'Catatan Arsip'
  },
  en: {
    header: 'Archived Notes'
  }
}

const content = {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export default content
