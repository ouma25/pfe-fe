<template>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-item sidebar-header d-flex flex-nowrap">
          <div class="user-pic">
            <img class="img-responsive img-rounded" src="../img/user.jpg" alt="User picture">
          </div>
          <div class="user-info">
                        <span class="user-name">Jhon
                            <strong>Smith</strong>
                        </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
          </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-item sidebar-search">
          <div>
            <div class="input-group">
              <input type="text" class="form-control search-menu" placeholder="Search...">
              <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- sidebar-menu  -->
        <div class=" sidebar-item sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>General</span>
            </li>
            <li class="sidebar-dropdown">
              <router-link to="/admin/dashboard">
                <i class="fa fa-tachometer-alt"></i>
                <span class="menu-text">Dashboard</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link to="/admin/professionals">
                <i class="fa fa-suitcase"></i>
                <span class="menu-text">Professionals</span>
                <span class="badge badge-pill badge-danger">3</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link to="/admin/clients">
                <i class="far fa-user-ninja"></i>
                <span class="menu-text">Clients</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link to="/admin/comments">
                <i class="fa fa-comment"></i>
                <span class="menu-text">Comments</span>
              </router-link>
            </li>
            <li class="sidebar-dropdown">
              <router-link to="/admin/services">
                <i class="fa fa-globe"></i>
                <span class="menu-text">Services</span>
              </router-link>
            </li>
            <li class="header-menu">
              <span>Extra</span>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-book"></i>
                <span class="menu-text">Documentation</span>
                <span class="badge badge-pill badge-primary">Beta</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-calendar"></i>
                <span class="menu-text">Calendar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-folder"></i>
                <span class="menu-text">Examples</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
      <!-- sidebar-footer  -->
      <div class="sidebar-footer">
        <div class="dropdown">

          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-bell"></i>
            <span class="badge badge-pill badge-warning notification">3</span>
          </a>
          <div class="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
            <div class="notifications-header">
              <i class="fa fa-bell"></i>
              Notifications
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i class="fas fa-check text-success border border-success"></i>
                </div>
                <div class="content">
                  <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo</div>
                  <div class="notification-time">
                    6 minutes ago
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i class="fas fa-exclamation text-info border border-info"></i>
                </div>
                <div class="content">
                  <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo</div>
                  <div class="notification-time">
                    Today
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i class="fas fa-exclamation-triangle text-warning border border-warning"></i>
                </div>
                <div class="content">
                  <div class="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo</div>
                  <div class="notification-time">
                    Yesterday
                  </div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#">View all notifications</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-envelope"></i>
            <span class="badge badge-pill badge-success notification">7</span>
          </a>
          <div class="dropdown-menu messages" aria-labelledby="dropdownMenuMessage">
            <div class="messages-header">
              <i class="fa fa-envelope"></i>
              Messages
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="../img/user.jpg" alt="">
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong> Jhon doe</strong>
                  </div>
                  <div class="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo</div>
                </div>
              </div>

            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="../img/user.jpg" alt="">
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong> Jhon doe</strong>
                  </div>
                  <div class="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo</div>
                </div>
              </div>

            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="../img/user.jpg" alt="">
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong> Jhon doe</strong>
                  </div>
                  <div class="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In totam explicabo</div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#">View all messages</a>

          </div>
        </div>
        <div class="dropdown">
          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-cog"></i>
            <span class="badge-sonar"></span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
            <a class="dropdown-item" href="#">My profile</a>
            <a class="dropdown-item" href="#">Help</a>
            <a class="dropdown-item" href="#">Setting</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i class="fa fa-power-off"></i>
          </a>
        </div>
        <div class="pinned-footer">
          <a href="#">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>
      </div>
    </nav>
</template>

<script type="text/javascript">
export default {
  mounted() {
    $('#info').hide();
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css';
@import '../css/main.css';
@import '../css/sidebar-themes.css';
.router-link-active
{
  color: greenyellow !important;
}
</style>
